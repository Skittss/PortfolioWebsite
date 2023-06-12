const Code = `
Model: "sequential"
_________________________________________________________________
 Layer (type)                Output Shape              Param #
=================================================================
 Convolutional_1 (Conv2D)    (None, 30, 30, 6)         300

 max_pooling2d (MaxPooling2D  (None, 15, 15, 6)        0
 )

 Convolutional_2 (Conv2D)    (None, 12, 12, 12)        1164

 max_pooling2d_1 (MaxPooling  (None, 6, 6, 12)         0
 2D)

 flatten (Flatten)           (None, 432)               0

 Dense1 (Dense)              (None, 216)               93528

 Dense2 (Dense)              (None, 64)                13888

 dense (Dense)               (None, 5)                 325

=================================================================
Total params: 109,205
Trainable params: 109,205
Non-trainable params: 0
_________________________________________________________________
`;

export default Code