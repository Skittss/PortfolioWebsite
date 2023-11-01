import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';

import transfer_teaser from '../../content/projects/ODST/Arcimboldo_Transfer.png'
import general_diag from '../../content/projects/ODST/pipeline.png'
import extension_diag from '../../content/projects/ODST/extension_pipeline.png'

import results_general_1 from '../../content/projects/ODST/general_results_1.png' 
import results_general_2 from '../../content/projects/ODST/general_results_2.png' 
import results_extension_1 from '../../content/projects/ODST/extension_results.png' 

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.teaser} githubURL={"https://github.com/Skittss/object_driven_st"}>
            <h1 id="overview" className="raleway-title">
                Abstract
            </h1>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage width="100%" src={transfer_teaser}/>
            </div>
            <p>
                Neural Style Transfer (NST) is an active research area within non-photorealistic rendering,
                allowing a desired artistic style to be replicated from a style exemplar onto a target content
                image. Though NST imposes no restrictions on the semantic alignment of content-style image
                pairs, it is often the case that a more aesthetically pleasing image can be produced when the
                semantics align and are preserved during the transfer.<br/><br/>
                In this work, a semantic style transfer (SST) pipeline is proposed which is capable of automatically preserving local features in style images during the transfer process via spatial control,
                without the need for manual masking. Recent developments in large segmentation models
                allow the domain of illustrative artwork to be sufficiently well-segmented, automatically, into
                coarse to semi-fine features: or generally speaking, into the concept of distinct 'objects'. Using
                such a segmentation of the style image as a base, non-parametric warping can be used to
                build corresponding semantic segmentations between the content and style images, allowing
                for spatially guided SST methods to be employed. The pipeline is flexible, allowing any SST
                method to be used so long as it operates on semantic segmentations.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="paper" className="raleway-title">
                Paper
            </h1>
            <p>
                This page is a very brief overview of the whole paper! For more details, please take a look at the <a target='_blank' href="https://github.com/Skittss/object_driven_st">project GitHub repo</a> and the <a target='_blank' href="https://github.com/Skittss/object_driven_st/blob/master/objects%20as%20semantics%20in%20style%20transfer.pdf">full paper</a>.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="brief-method" className="raleway-title">
                Brief Method Outline
            </h1>
            <p>
                In this paper, I introduce a novel pipeline, ODST, for neural style transfer which uses pretrained segmentation models
                to automatically enforce spatial constraints on the style transfer process. This results in a more accurate style transfer, particularly 
                in cases which require <i>local feature preservation</i>; i.e. images which are composed of many distinct individual parts which
                we do not wish to lose after the style transfer. Additionally, the pipeline is fully autonomous, yet allows for user control in the segmentation process if desired
                (i.e. marking which 'features' should be preserved).
            </p>
            <h2 id="ODST" className="raleway-title">
                General Case ODST
            </h2>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1080px"}}>
                <AnnotatedImage width="100%" src={general_diag}/>
            </div>
            <p>
                In a general case, we provide two images just as in regular NST: a content image <Latex>{`$\\textbf x_C$`}</Latex>, and a style
                exemplar <Latex>{`$\\textbf x_S$`}</Latex>. 
                <br /><br />
                The style exemplar is first segmented using a pretrained segmentation model. The aim here is to segment out important objects which we wish to preserve.
                This is inherently a subjective task, so there are therefore no restrictions on the segmentation model used.
                It is worth nothing, however, that the model used will greatly affect the quality of the result from the pipeline.
                <br /><br />
                For a general case, it is important we pick a model which has good zero-shot performance on <b>stylised inputs</b>. In this paper, Meta Research's "Segment Anything"
                is used. It has reasonable zero-shot performance on stylised inputs, and additionally supports prompted segmentation which allows us to deal with the problem of subjective segmentation semi-automatically.
                <br /><br />
                The segmentation of the style exemplar <Latex>{`$\\textbf m_S$`}</Latex> is then passed to a pre-trained warping network, in which the aim is to warp the generated segmentation onto the content image. This effectively
                generates a spatial correspondence between the style and content images. In other words, we end up with an additional segmentation <Latex>{`$\\textbf m_C$`}</Latex> which describes where we would find local features of the style image if they 
                were superimposed onto the content image.
                <br /><br />
                Finally, the style and content images <Latex>{`$(\\textbf x_S, \\textbf x_C)$`}</Latex> and their corresponding segmentation masks <Latex>{`$(\\textbf m_S, \\textbf m_C)$`}</Latex> are fed into a spatially guided style transfer network which completes the transfer.
                In this paper, the follow up to Gaty's original NST paper is used.
            </p>
            <br />
            <h2 id="ODST-2" className="raleway-title">
                ODST on Headshots
            </h2>
            <p>
                The works of Arcimboldo were an excellent benchmark for the performance of ODST during development of the pipeline. The composition of local features (e.g. fruits, vegetables and various small objects) is in fact the 'style' of the works. Therefore to properly transfer this style,
                local features must be transferred accurately. 
                <br /><br />
                General case ODST was able to perform well on a subset of Arcimboldo's works, but highlighted some important shortcomings of the method. These mostly stemmed from the warping network. Reasonably small semantic differences between images could cause a non-sensical warp
                which would greatly reduce the quality of the resultant style transfer.
                <br /><br />
                The purpose of this section and extension is to showcase the extensibility of the pipeline. The pipline allows shortcomings to be mostly mitigated by changing out certain stages with domain-specific
                solutions - recalling that the specific implementation of each stage is not fixed. In this case, headshots were selected as the specific domain to work on, and the warping network was switched.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1080px"}}>
                <AnnotatedImage width="100%" src={extension_diag}/>
            </div>
            <p>
                The above diagram shows how the warping network was switched with a facial landmark detection network.
                Facial landmarking enables a mesh of a face to be created. Creating meshes for two faces then allows for a piecewise affine transform to be performed between them in place of a warp.
                <br /><br />
                The key difference here is that we now need two faces to transform between, whereas in the general case we simply directly warp from the style image to the content image.
                In theory, a facial landmark network could be directly used on the style image itself. However at present, a network which exhibits high performance on complicated stylised domains such as Arcimboldo does not exist.
                <br /><br />
                Therefore, we can comprimise by making the pipeline one-shot instead of zero-shot. We provide one manually selected image of a face which bears resemblance to the style image, and use this in the affine transform instead.
                <br /><br />
                With this, we once again have all four required inputs for spatially controlled NST, and can perform the transfer with greater accuracy now thanks to the improved 'warp' for this domain.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="results" className="raleway-title">
                Results
            </h1>
            <p>
                Here, I present some notable results from the paper, organised as a comparison against recent existing methods. For an in depth analysis, additional results, and full resolution images, please refer to the full paper.
            </p>
            <br/>
            <h2 id="results-general-1" className="raleway-title">
                General ODST on Arcimboldo Headshots
            </h2>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1000px"}}>
                <AnnotatedImage width="100%" src={results_general_1}/>
            </div>
            <br/>
            <h2 id="results-general-2" className="raleway-title">
                General ODST on Non-Portrait Images
            </h2>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1000px"}}>
                <AnnotatedImage width="100%" src={results_general_2}/>
            </div>
            <br/>
            <h2 id="results-extension-1" className="raleway-title">
                ODST on Arcimboldo Headshots
            </h2>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1000px"}}>
                <AnnotatedImage width="100%" src={results_extension_1}/>
            </div>
        </ProjectPage>
    );
}

export default Home;
