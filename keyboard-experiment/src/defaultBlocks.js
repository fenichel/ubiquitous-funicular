export const defaultBlocks = {
    "blocks": {
        "languageVersion": 0,
        "blocks": [
            {
                "type": "text_append",
                "id": "g*HLSo%.pvz[:GIA~lrY",
                "x": 152,
                "y": 12,
                "fields": {
                    "VAR": {
                        "id": "4yr~bj_AClD?`7b?CLZ+"
                    }
                },
                "inputs": {
                    "TEXT": {
                        "shadow": {
                            "type": "text",
                            "id": "G^J`qdQyTr=XD^hWN0Q#",
                            "fields": {
                                "TEXT": ""
                            }
                        }
                    }
                },
                "next": {
                    "block": {
                        "type": "controls_repeat_ext",
                        "id": "t$4p-4tnKDp0_eba3.RX",
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
                        },
                        "next": {
                            "block": {
                                "type": "text_append",
                                "id": "Y#|g`_[0XIyS*x!TA[j=",
                                "fields": {
                                    "VAR": {
                                        "id": "4yr~bj_AClD?`7b?CLZ+"
                                    }
                                },
                                "inputs": {
                                    "TEXT": {
                                        "shadow": {
                                            "type": "text",
                                            "id": "v4oQ/96Lv@4yJ|%AWxeZ",
                                            "fields": {
                                                "TEXT": ""
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            {
                "type": "lists_setIndex",
                "id": "SGBs{9VLyHcmQt*2$*k^",
                "x": 728,
                "y": 234,
                "fields": {
                    "MODE": "SET",
                    "WHERE": "FROM_START"
                },
                "inputs": {
                    "LIST": {
                        "block": {
                            "type": "variables_get",
                            "id": "xNI}u?NJaxf*{RDL#])7",
                            "fields": {
                                "VAR": {
                                    "id": "4yr~bj_AClD?`7b?CLZ+"
                                }
                            }
                        }
                    }
                },
                "next": {
                    "block": {
                        "type": "lists_setIndex",
                        "id": "ZiOAdw!t;5Z2UJQBj#GU",
                        "fields": {
                            "MODE": "SET",
                            "WHERE": "FROM_START"
                        },
                        "inputs": {
                            "LIST": {
                                "block": {
                                    "type": "variables_get",
                                    "id": "!Ko:+mXu9i4Je?DwyDQZ",
                                    "fields": {
                                        "VAR": {
                                            "id": "4yr~bj_AClD?`7b?CLZ+"
                                        }
                                    }
                                }
                            }
                        },
                        "next": {
                            "block": {
                                "type": "lists_setIndex",
                                "id": "~Y=Z,k=*!glO0p}l5C;:",
                                "fields": {
                                    "MODE": "SET",
                                    "WHERE": "FROM_START"
                                },
                                "inputs": {
                                    "LIST": {
                                        "block": {
                                            "type": "variables_get",
                                            "id": "UGhFTSO)Lc].#+v{kzW$",
                                            "fields": {
                                                "VAR": {
                                                    "id": "4yr~bj_AClD?`7b?CLZ+"
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        ]
    },
    "variables": [
        {
            "name": "item",
            "id": "4yr~bj_AClD?`7b?CLZ+"
        }
    ]
}



const singleStack = {
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