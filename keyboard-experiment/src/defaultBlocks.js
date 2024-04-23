export const defaultBlocks = {
  "blocks": {
      "languageVersion": 0,
      "blocks": [
          {
              "type": "controls_repeat_ext",
              "id": "t$4p-4tnKDp0_eba3.RX",
              "x": 133,
              "y": 65,
              "inputs": {
                  "TIMES": {
                      "shadow": {
                          "type": "math_number",
                          "id": "yMl175O#W2=~mo2AV)qM",
                          "fields": {
                              "NUM": 10
                          }
                      },
                      "block": {
                          "type": "math_arithmetic",
                          "id": "s{]H%4+Zkxhm#y2kf$Xn",
                          "fields": {
                              "OP": "MULTIPLY"
                          },
                          "inputs": {
                              "A": {
                                  "shadow": {
                                      "type": "math_number",
                                      "id": "@iAd;QKQc^zeU-]t9r.R",
                                      "fields": {
                                          "NUM": 1
                                      }
                                  }
                              },
                              "B": {
                                  "shadow": {
                                      "type": "math_number",
                                      "id": "[^J4zUf(wCry?dh~H=*7",
                                      "fields": {
                                          "NUM": 1
                                      }
                                  }
                              }
                          }
                      }
                  },
                  "DO": {
                      "block": {
                          "type": "add_text",
                          "id": "st_,s7Yx*8gJR!J+d_-G",
                          "inputs": {
                              "TEXT": {
                                  "shadow": {
                                      "type": "text",
                                      "id": "9Eb2!Y#42eH;8::Wkc`O",
                                      "fields": {
                                          "TEXT": "abc"
                                      }
                                  }
                              },
                              "COLOR": {
                                  "shadow": {
                                      "type": "colour_picker",
                                      "id": "A7t]i//!_5N/6;`V%f`{",
                                      "fields": {
                                          "COLOUR": "#aa00cc"
                                      }
                                  }
                              }
                          }
                      }
                  }
              }
          }
      ]
  }
}