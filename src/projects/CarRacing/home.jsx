import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Row, Col, Divider, Image } from 'antd';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import racing_example from '../../content/projects/CarRacing/Evaluating_EP56.mp4'
import preprocess from '../../content/projects/CarRacing/preprocessing/preprocessing_steps.png'

import rclip_compare from '../../content/projects/CarRacing/graphs/Rclip_Comparison.png'
import architecture from '../../content/projects/CarRacing/graphs/216x64xn.svg'
import architecture_code from '../../content/projects/CarRacing/code_snippets/architecture'

import compare_dqn from '../../content/projects/CarRacing/graphs/compare_dqn.png'
import final_dqn from '../../content/projects/CarRacing/graphs/STACK_DDQN_3.png'
import final_dqn_hist from '../../content/projects/CarRacing/graphs/STACK_DDQN_3 (EVAL_3600).png'

import training_montage from '../../content/projects/CarRacing/training_montage.mp4'

import 'katex/dist/katex.min.css'
import Latex from 'react-latex-next';

import Meta from '.';
import ProjectPage from '../projectPage';
import AnnotatedImage from '../annotatedImage';

const Home = () => {
    return (
    
        <ProjectPage title={Meta.title} thumb={Meta.thumb}>
            <h1 id="overview" className="raleway-title">
                Overview
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <video style={{objectFit: "cover", width: "100%"}}  autoPlay loop muted>
                    <source src={racing_example} type='video/mp4' />
                </video>
            </div>
            <p>
                Reinforcement learning (RL) is a subfield of machine learning that focuses on training agents
                to make sequential decisions in an environment to maximize a cumulative reward. 
                Unlike supervised learning, where labeled examples are used to directly learn a mapping between inputs and outputs,
                reinforcement learning involves an agent interacting with an environment, learning from feedback signals
                (rewards or penalties) to improve its decision-making abilities over time.
                <br /><br />
                In this post, I provide a short walkthrough on how to train a reinforcement learning agent to tackle OpenAI's CarRacing domain, the results of which can be seen above.
                OpenAI's Car Racing Environment serves as an excellent benchmark for testing the capabilities of reinforcement learning algorithms. 
                An agent in this environment must train to recognise patterns from pixel data, and learn to control a physically-simulated car according to what it sees.
                The dimensionality of this domain is somewhat high so we cannot apply brute-force learning methods, and instead must make use of approximation. Neural Networks are an
                amazing tool for this, and have paved the way for many breakthroughs in the field of RL within the last decade. For example, two you may be familiar with: AlphaGo and OpenAI Five.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="rl-into" className="raleway-title">
                A Brief intro to RL
            </h1>
            <p>
                The RL problem involves an agent interacting with an environment, where the agent takes actions
                based on its observations, receives feedback in the form of rewards, and learns to improve its decision-making 
                abilities as it trains. The problem can be formalized as a Markov Decision Process (MDP), which consists of a set of states, 
                actions, transition probabilities, and rewards. The goal of the RL agent is to learn an optimal 
                policy - a mapping from states to actions - that maximizes the cumulative reward it receives over time in the environment.
                <br /><br />
                We encounter a different set of machine learning problems with RL. 
                For instance, our reward function can be sparse, making optimisation tricky. 
                Additionally, an agent has to consider a lot of unknowns; it does not ncessarily know what the result of taking a specific action
                may be - it must learn from experience. This introduces a trade-off between exploration: trying out new actions to learn more about the environment, and exploitation: 
                choosing actions that are known to yield higher rewards.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="dqn" className="raleway-title">
                Deep Q Learning (DQN)
            </h1>
            <p>
                DQN is a friendly starting point for training an RL agent due to its simplicity and versatile training process. DQN involves learning a 'Q-value' for each state-action pair which 
                is an estimate of the expected reward an agent would receive for taking a particular action in a particular state. An agent can then choose sensible actions by greedily selecting actions which lead to the highest
                expected reward.
                <br /><br />
                Two observations we can make from this explanation are 1: since we have state-action pairs, we must be working with a discrete action space. And 2: the size of the state-action pair space
                is likely very large, or infinite for more challenging problems. This is where the 'deep' part of Deep-Q comes from. We cannot possibly generate an optimal set of Q-values for an infinitely large space, 
                so we make use of deep learning to approximate this Q-value function for all states. DQN is infact based off of an algorithm which indeed tabulates all possible Q-values, named Q-learning, but this is obviously 
                not applicable to this more complex domain.
                <br /><br />
                An important consideration in the CarRacing domain is how to deal with the large observation space we have. The 
                observation of pixel data is a <Latex>{`$96\\times96$`}</Latex> matrix (at a minimum, 9216 values!), which would make training slow for a regular
                dense network. The obvious choice instead is to use a convolutional neural network (CNN) to reduce the input dimensions and to learn spatial-features (e.g. distinguishing track from off-road) before 
                passing information to a dense network.
            </p>
            <br />
            <h1 id="ddqn" className="raleway-title">
                Double Deep Q (DDQN)
            </h1>
            <p>
                DQN, as introduced above, is a method which is able to learn an optimal policy through
                approximation of Q-values (from ideas in tabular Q-learning). Q-values describe the expected return
                from taking a certain action in a certain state. This allows an agent to make decisions in its current state
                without having to look forward in time, which is often not possible. An agent can therefore greedily
                select actions with the highest Q-values in order to follow it's current best policy. A deep model is
                used to generate approximate Q-values from a state-observation. Policies are refined by reducing
                loss calculated differences in current vs. expected q-value based on the reward received from many
                state-transitions (experiences).
                <br /><br />
                DDQN expands on these ideas slightly by tackling a potent issue in DQN: overestimation bias. Since
                an agent greedily follows its best policy to evaluate expected return, it is likely to make an overestimate
                - it is only concerned with the best possible outcomes in the future. In actuality, not all outcomes will
                be 'optimal' and so the value is higher than expected. This issue is additionally worsened when the frequency of estimations is increased.
                <br /><br />
                DDQN reduces overestimation bias by maintaining two networks; an online 'training' network for
                action selection, and an offline 'target' network for q-value estimation. The target network is updated
                to match the training network periodically, thus stays reasonably stable for q-value estimation and
                reduces overestimation. This changes the loss calculation under MSE for non-terminal <Latex>{`$s'$`}</Latex> from
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L(s,a,s',r)=\\bigg(\\big(r+\\gamma\\max_{a'}Q(s',a')\\big)-Q(s,a)\\bigg)^2$`}
                    </Latex>
                </div>
                <br />
                to
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$L(s,a,s',r)=\\bigg(\\underbrace{\\big(r+\\gamma\\max_{a'}Q_{\\text{target}}(s',a')\\big)}_{\\text{new q-value estimate } \\hat q}-Q_{\\text{train}}(s,a)\\bigg)^2$`}
                    </Latex>
                </div>
                (for terminal <Latex>{`$s'$`}</Latex>, DDQN still uses <Latex>{`$\\hat q = r$`}</Latex>)
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="preprocessing" className="raleway-title">
                Preprocessing
            </h1>
            <p>
                The default state space provided by the environment contains a lot of information which is effectively
                redundant to an agent. In fact, a lot of this information makes training the agent <i>significantly harder</i> as
                it introduces a lot of noise into the agent's observation while providing negligible meaningful content.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%"}}>
                <AnnotatedImage width="100%" src={preprocess}/>
            </div>
            <p>
                The exact steps are as follows:
                <br /><br />
                <b><u>1. Bottom UI Bar Removed.</u></b>
                <br />
                Mostly is noise. Contains visualisations of the agents score, driving speed and turning speeds, but
                information is hard to extract from this due to pooling layers.
                <br /><br />
                <b><u>2. Billinear downscaling replaced by nearest-neighbour downscaling.</u></b>
                <br />
                Billinear downscaling introduces unnecessary noise (blurring) along the road boundary and around
                the car's position. It also causes the number of unique colour values in the observation to increase
                which may make mapping features more difficult.
                <br /><br />
                <b><u>3. Green grass pixels clamped to white.</u></b>
                <br />
                Further removal of unecessary information; the agent only needs to know where the grass boundary
                is. It generally should not be going into the grass as this has no positive reward. Clamping to white
                is sufficient, and makes the boundary more distinct from other features in the observation.
                <br /><br />
                <b><u>4. RGB <Latex>{`$\\to$`}</Latex> Grayscale conversion.</u></b>
                <br />
                Cuts the observation size down to a third without losing important information; all key features (road,
                grass, checkpoints, and car) are still unique colours in mono.
                <br /><br />
                <b><u>5. Grayscale values <Latex>{`$\\in[0, 1]$`}</Latex> normalised to the range <Latex>{`$[-1, 1]$`}</Latex>.</u></b>
                <br />
                A generally useful trick for training neural networks. Helps reduce vanishing and exploding gradients,
                and smooths the optimisation landscape.
                <br /><br />
                Additionally, some undesired behaviour of the environment was also removed, such as the view of the
                track zooming in within the first few frames; this would make the agent's observation fundamentally
                different within the first few frames and subsequently harder to learn from or generalise the rest of
                its racing strategy to.
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="tweaks" className="raleway-title">
                Algorithm Tweaks
            </h1>
            <h2 id="acsp" className="raleway-title">
                Action Space
            </h2>
            <p>
                By default, the environment operates under continuous actions. This is suitable for PPO, however
                DDQN operates only on discrete action spaces. As such, the action space is reduced to a set of 5
                primary actions for DDQN models which capture the main extents of which the car can be controlled:
                full left & right turning, full acceleration, and soft braking (full braking only is too harsh for smooth
                control).
                <br /><br />
                Additionally, training can be quite slow from the offset as the car starts from a standstill. The only
                useful action an agent can take in this state is acceleration; all others keep the car stuck in the standstill.
                Therefore a parameter can be given to bias acceleration actions when choosing a random action. For
                instance, the probability distribution for the reduced action space under an acceleration bias factor
                4 would be [0.125, 0.125, 0.5, 0.125, 0.125]. This helps speed up the start of training by increasing the
                change of generating useful experiences from the offset of training.
            </p>
            <br />
            <h2 id="frame-stack" className="raleway-title">
                Frame Stacking
            </h2>
            <p>
                Frame skipping refers to allowing the agent to only act every <Latex>{`$N$`}</Latex> frames, and having it repeat the same
                action in the between-frames. On its own, this allows for an agent to train faster as it will only train
                every <Latex>{`$N$`}</Latex> frames; training on frame data is expensive and it is more important that diverse experiences
                are gathered rather than large volumes for effective learning.
                <br /><br />
                Frame stacking refers to aggregating multiple sequentially observed frames into a single observation.
                The creators of the technique saw success with it when playing Atari games, to which this domain is
                similar. Use of the aforementioned between-frames from frame skipping is an easy way of creating
                such a frame stack, i.e. combining a number of 2D observations (frames) into a single 3D observation.
                This increases the observation space substantially, but is manageable to train on using convolution
                and pooling. Frame stacking is very beneficial however due to the fact that it adds previously absent
                temporal information into the observation. This allows an agent to gauge information about its speed,
                or turning speed, which is not possible without. This is <i>extremely</i> important for making tight turns and
                preparing ahead, as prepration for a turn really begins some time before hitting the apex. Unreliable
                preparation for turns is a major problem without frame stacking, and perhaps the single most important
                feature for increased general performance based on experimental results.
            </p>
            <br />
            <h2 id="batch-prio" className="raleway-title">
                Priority Batches
            </h2>
            <p>
                By default, experience replay batches are uniformly sampled from the agent's memory buffer. This
                ensures the agent learns from all memories currently in the buffer given enough updates. This approach
                is generally fine, but when working on a reasonably complex environment (especially with limited computing power), learning like this can be quite slow. An agent can accumulate a fair amount of experience
                - especially with a large replay buffer - but not actually learn from the <i>useful</i> experience it has gathered
                (e.g. major control mistakes), as batches get diluted with rudimentary errors from early training.
                <br /><br />
                Prioritised Experience Replay (PER) has been proposed to ensure agents learn
                from the most salient errors in their gathered experience. Samples are importance sampled using the
                TD-error in the DDQN update step as the sampling probability distribution function (pdf).
                <br /><br />
                Taking ideas from the above, a simplified pdf can be defined under the assumption that, generally
                speaking, more recently gathered experiences are more useful to learn from as it is more likely the
                agent has a decent level of control over the car in these experiences as training progresses. This
                can potentially help the agent to learn a more optimal strategy but its main purpose is for reducing
                convergence times. A simple linear function over the indices of items in the replay buffer works well
                (derived from Gauss' sum to <Latex>{`$n$`}</Latex> numbers):
                <br /><br />
                <div style={{paddingLeft: "3em", paddingRight: "3em", textAlign: "center"}}>
                    <Latex>
                        {`$\\displaystyle pdf(i)=\\frac{2i}{N(N+1)},$`}
                    </Latex>
                    &nbsp;&nbsp;&nbsp;
                    <Latex>
                        {`$N=len(\\text{Replay Buffer}),$`}
                    </Latex>
                    &nbsp;&nbsp;&nbsp;
                    <Latex>
                        {`$i\\in [1,\\ N+1]$`}
                    </Latex>
                </div>
            </p>
            <br />
            <h2 id="reward-clip" className="raleway-title">
                Reward Clipping
            </h2>
            <p>
                Agents have a tendency to act greedily to accumulate reward, and this is especially noticeable for
                short-term when the car is moving quickly. High rewards can be accumulated in a single frame when the
                car crosses multiple checkpoints at once due to high speeds. On subsequent iterations, these translate
                into high short-term rewards (only minorly <Latex>{`$\\gamma$`}</Latex>-discounted) and encourage reckless driving tactics, seen
                mostly as extremely high speeds on straightaways. Cornering is near impossible at these speeds and
                is a major case of failure. Subsequently, rewards can be <i>clipped</i> - 'truncated' so to speak - so no more
                than a little reward can be accumulated each frame. This implicitly discourages greedy behaviour. In
                this implementation, cumulative rewards from frame-skips are clamped to the range <Latex>{`$[-10, \\ 1]$`}</Latex>. 
                The graph below shows experimentally that reward clipping can help training converge more quickly - almost twice
                as quickly in this example (~400 episode convergence with; ~800 episode convergence without).
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "574px"}}>
                <AnnotatedImage src={rclip_compare}/>
            </div>
            <br />
            <h2 id="other-tweak" className="raleway-title">
                Other Tweaks
            </h2>
            <p>
                <b><u>Regularization for networks (L2)</u></b>
                <br />
                A general machine learning technique. Aims to help prevent overfitting and promote generalisation.
                In this case, deterring a network from relying on any particular node too much may prevent the agent
                from learning unusual quasi-effective strategies.
                <br /><br />
                <b><u>Exponentially decaying learning rate</u></b>
                <br />
                Another general machine learning technique. Helps fine-tune a model after it has done significant
                learning in the beginning of training - when major changes to policy are likely no longer needed.
                <br /><br />
                <b><u>Early Stopping</u></b>
                <br />
                Stopping episodes early when an agent is performing badly. This helps train the agent faster (episodes
                are generally shorter) and to not dilute the agent's gathered experience with states it should not have
                found itself in to begin with. This involves stopping episodes when cumulative reward drops below
                a certain threshold (-10) or when the agent receives negative reward n frames in a row (hyperparameter).
            </p>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="architecture" className="raleway-title">
                Final Network Architecture
            </h1>
            <p>
                Below is a visualisation of the final CNN architecture used as well as its corresponding Tensorflow summary.
            </p>
            <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "1200px", backgroundColor: "white"}}>
                <img src={architecture}/>
            </div>
            <br />
            <div className="code-snippet" style={{width: "100%"}}>
                <SyntaxHighlighter 
                    language="python" 
                    showLineNumbers={false}
                    style={dracula}
                    startingLineNumber={0}
                >
                    {architecture_code}
                </SyntaxHighlighter>
            </div>
            <br />
            <Divider style={{borderTopWidth: "1px", borderTopColor: "#000000", opacity: 0.5}}/>
            <h1 id="results" className="raleway-title">
                Results
            </h1>
            <h2 id="baselines" className="raleway-title">
                Baselines
            </h2>
            <p>
                Firstly, some baselines:
                <br /><br />
                <b><u>Solved</u></b>
                <br />
                Score <Latex>{`$\\gt$`}</Latex> 900 for single episodes. The environment is considered fully solved when
                an average score of 900 is achieved across 100 consecutive episodes.
                <br /><br />
                <b><u>Zero-performance</u></b>
                <br />
                Random Agent. Achieves an average score of <b>-10</b>.
                <br /><br />
                <b><u>Low-performance</u></b>
                <br />
                Forward Only Agent. Achieves an average score of <b>80</b>.
                <br /><br />
                <b><u>Human</u></b>
                <br />
                Anywhere from <b>low 100s</b> all the way up to full solves depending on experience.
            </p>
            <br />
            <h2 id="graph" className="raleway-title">
                Graphs and Discussion
            </h2>
            <p>
                Overall, through use of DDQN, we can see promising and performative results. All agents exhibited
                clear attempts to stay on track and drive at high speeds when possible. On the best trained model
                (STACK_DDQN_3), the agent is close to full episode solves approximately 50% of the time. Additionally, 
                the agent consistently beat both baseline measures, even in episodes with relatively poor performance compared 
                to the max/mean. At it's best performance, it likely drives better than a human expert.
                <br /><br />
                <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "817px"}}>
                    <AnnotatedImage src={compare_dqn}/>
                </div>
                <br />
                We can observe some interesting emergent behaviour from agents, including agents getting back on track
                after failing (recovery), corner cutting without skipping checkpoints, and tight racing lines (especially
                around the tightest of corners).
                <br /><br />
                Model evaluations indicate that mean, as well as maximum performance can be significantly
                increased by introducing temporal data into models via framestacking. Without framestacking, agents
                are not able to fully solve any episodes, and are prone to greedy and reckless driving behaviours.
                Priority batch sampling an agent's experience during replay significantly reduced total convergence
                time. A comparison of STACK_DDQN_P_1 and STACK_DDQN_3 indicates that priority batching
                can reduce convergence times by approximately a half. The rationale for this improvement is that
                latter agent experience is likely to be closer to good racing policy, and is therefore good to learn from
                when fine-tuning.
                <br /><br />
                Moreover, a comparison of DDQN_P_1 and DDQN_P_2 indicates that reward clipping also
                helped reduce convergence times and overall training consistency. Reward clipping helped reduce
                overconfident driving, which was especially prominent in agents like the aforementioned which didn't
                train on temporally-correlated information (no framestacking).
                <br /><br />
                One of the most potent issues with trained agents is inconsistency: the standard deviation about the
                mean score is relatively high for all agents. This is partly due to the fact that the agents are punished
                harshly for mistakes (via early episode termination) but also due to the fact that sometimes an agent
                isn't able to perform a simple action which it is able to perform in a seemingly similar scenario. This
                is most often a failed early turn. This could be due to three reasons: 1) some level of forgetting - an
                agent dropping an older learned policy in favour of a new one based on new experience. 2) somewhat
                incoherent models of the track in agents' convolutional layer feature maps. 3) agents sometimes being
                forced to make suboptimal moves due to turning being somewhat heavy-handed in the discrete action
                space. Such actions have to be repeated during frame skips also.
                <br /><br />
                Below is a detailed training graph for the best trained model (STACK_DDQN_3):
                <br /><br />
                <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "817px"}}>
                    <AnnotatedImage src={final_dqn}/>
                </div>
                <br />
                And a histogram of evaluation results:
                <br /><br />
                <div style={{margin: "0 auto", paddingBottom: "20px", width: "100%", maxWidth: "817px"}}>
                    <AnnotatedImage src={final_dqn_hist}/>
                </div>
            </p>
            <br />
            <h1 id="training" className="raleway-title">
                Training Montage
            </h1>
            <div style={{paddingBottom: "20px", textAlign: "center"}}>
                <video style={{objectFit: "cover", width: "100%"}}  autoPlay loop muted>
                    <source src={training_montage} type='video/mp4' />
                </video>
            </div>
            <br />
            <h1 id="improvements" className="raleway-title">
                Improvements
            </h1>
            <p>
                First and foremost, it would be beneficial to allow the stacked DDQN models shown to train for more
                iterations, ideally into the order of millions of training iterations. Current stacked models still show
                shallow upwards trends when training was halted (especially STACK_DDQN_P_1), so it is possible
                they would be able to solve the environment fully given enough iterations.
                <br /><br />
                It would be ideal to experiment further with different training approaches such as Dueling DQN.
                Dueling DQN could alleviate some of the performance inconsistency
                observed in late-stage training by assisting the agent in having a more coherent model of its environment
                due to both training and target networks sharing the same convolutional layers.
                <br /><br />
                A different training avenue is under a continuous action space, using PPO. PPO has multiple benefits. PPO trains on continuous
                action spaces, which would allow for better control in difficult scenarios, and would reduce the 
                heavy-handedness of turning overall. It is able to scale up well on hardware (multiple environments can be run
                in parallel and save experiences to a shared buffer) which would be useful to cut down on the long training times 
                seen with DDQN. PPO using Actor-Critic based updates would hopefully reduce the amount
                of hyperparameter tweaking which has to be done - this was a major time-sink during experimentation. 
                <br /><br />
                Moving away from technical reinforcement learning improvements, a better baseline which could
                be implemented is a PID controller - a handcrafted technique designed for autonomous control. This
                technique finds use in automotive applications such as cruise control and RC racing. It would provide
                a competitive baseline between the forward-only and human expert baselines.
            </p>
        </ProjectPage>
    );
}

export default Home;
