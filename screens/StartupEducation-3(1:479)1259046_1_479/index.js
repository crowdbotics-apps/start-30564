import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_1_480}>
        <View style={styles.View_1_481} />
        <View style={styles.View_1_482}>
          <View style={styles.View_1_483}>
            <View style={styles.View_1_484}>
              <Text style={styles.Text_1_484}>
                Find your favorite startup course here
              </Text>
            </View>
            <View style={styles.View_1_485}>
              <View style={styles.View_1_486}>
                <View style={styles.View_1_487} />
                <View style={styles.View_1_488}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ad0c/67f0/936f53db4768e975620a403849b46fe4"
                    }}
                    style={styles.ImageBackground_1_489}
                  />
                </View>
                <View style={styles.View_1_492}>
                  <Text style={styles.Text_1_492}>Search course</Text>
                </View>
              </View>
              <View style={styles.View_1_493}>
                <View style={styles.View_1_494} />
                <View style={styles.View_1_495}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5892/f5c5/82e178f3b1c1ef442b6849061207c000"
                    }}
                    style={styles.ImageBackground_1_496}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_1_506}>
            <View style={styles.View_1_507}>
              <TouchableOpacity
                style={styles.TouchableOpacity_1_508}
                onPress={() =>
                  this.props.navigation.navigate(getNavigationScreen("1_354"))
                }
              >
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af71/6489/121966a08e329be445ac3ab9dfd0af8c"
                  }}
                  style={styles.ImageBackground_1_509}
                />
              </TouchableOpacity>
              <View style={styles.View_1_511}>
                <Text style={styles.Text_1_511}>Hi, Akash 👋</Text>
              </View>
            </View>
            <TouchableOpacity
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/993c/1c8e/74b30246c2fedf938f783aabde3af5ff"
              }}
              style={styles.TouchableOpacity_1_512}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1_55"))
              }
            />
          </View>
          <View style={styles.View_1_513}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7721/f036/0473e781d59056506a9c78d1af5b1672"
              }}
              style={styles.ImageBackground_1_514}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b42/adbb/8bb5e3eff392d731c93b55f9a798696d"
              }}
              style={styles.ImageBackground_1_515}
            />
            <View style={styles.View_1_518}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7f/09fd/cad0625ca98932a77c79ae255e6e6560"
                }}
                style={styles.ImageBackground_1_519}
              />
              <View style={styles.View_1_520} />
              <View style={styles.View_1_521} />
              <View style={styles.View_1_522} />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e4c2/3c3b/e6c09143107c54cdedb0932b58ef6ca2"
              }}
              style={styles.ImageBackground_1_523}
            />
          </View>
          <View style={styles.View_1_524}>
            <TouchableOpacity
              style={styles.TouchableOpacity_1_525}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1_229"))
              }
            >
              <View style={styles.View_1_526}>
                <View style={styles.View_1_527} />
                <View style={styles.View_1_528}>
                  <Text style={styles.Text_1_528}>
                    Finding Co-Founder in early days
                  </Text>
                </View>
                <View style={styles.View_1_529}>
                  <View style={styles.View_1_530}>
                    <Text style={styles.Text_1_530}>Ankur Warikoo</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d99/5331/5179d83d911507113ce34f1add4c69b9"
                    }}
                    style={styles.ImageBackground_1_531}
                  />
                </View>
                <View style={styles.View_1_532}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b3/8fe6/e873ba54da459bdd6432c14dd9f82945"
                    }}
                    style={styles.ImageBackground_1_533}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65b3/8fe6/e873ba54da459bdd6432c14dd9f82945"
                    }}
                    style={styles.ImageBackground_1_534}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/77f7/5a5e/19c9e7da7a017bb4a8a36521285d54aa"
                    }}
                    style={styles.ImageBackground_1_535}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fe1b/6553/48a33d6ba28890f72d4d26b374d56b8d"
                    }}
                    style={styles.ImageBackground_1_536}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9fa8/9f5e/b817cde84370db0cce5c3490801a6b25"
                    }}
                    style={styles.ImageBackground_1_537}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a71/b6b3/270333de6bc2b5f8f1bb08d5d49b2148"
                    }}
                    style={styles.ImageBackground_1_538}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c2e/4688/3e45e3abefacad49b85c639c8d1a9093"
                    }}
                    style={styles.ImageBackground_1_539}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7596/df97/06358d124f835e709b9e9731b76029ba"
                    }}
                    style={styles.ImageBackground_1_540}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3f34/6d73/169f8438bd575fcd3725354f5daecb5c"
                    }}
                    style={styles.ImageBackground_1_541}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2da9/6fe2/bb5ebbfbbfcc38fa7d2834bd821de56a"
                    }}
                    style={styles.ImageBackground_1_542}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2d57/0705/852a72798b60fbed6dfaa9b76a5ec7f5"
                    }}
                    style={styles.ImageBackground_1_543}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd31/5463/d2804ebc959424cf42e6c5982c6f62b5"
                    }}
                    style={styles.ImageBackground_1_544}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fbd2/472b/5e67aaad8d678a287d63ac6c3c5ec322"
                    }}
                    style={styles.ImageBackground_1_545}
                  />
                  <View style={styles.View_1_546} />
                  <View style={styles.View_1_547} />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f640/627a/4816e275b6ad4516d82cf6cf4778340e"
                    }}
                    style={styles.ImageBackground_1_548}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5d4/8d23/9d398b7f593abc152d72288ab076144f"
                    }}
                    style={styles.ImageBackground_1_549}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/726f/3549/27823f1c0058aec5c043e26eeab6279e"
                    }}
                    style={styles.ImageBackground_1_550}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd34/e3cf/676f104cfcc86bc06b3c4ed7883b25d7"
                    }}
                    style={styles.ImageBackground_1_551}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a049/f6ec/99c05673939811d16269195e61dadefd"
                    }}
                    style={styles.ImageBackground_1_552}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4201/3f66/c124a58be10d8b9e775c6d6a19761b6c"
                    }}
                    style={styles.ImageBackground_1_553}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9957/e42b/c4efc8d357272ed2025733066464b912"
                    }}
                    style={styles.ImageBackground_1_554}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdf4/909e/717a15b69e6b3805dcd8807a0d3c1b9a"
                    }}
                    style={styles.ImageBackground_1_555}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7cca/744f/d232b5ce83592deacd63322d0613379f"
                    }}
                    style={styles.ImageBackground_1_556}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df79/20fe/85f372d7321b708196cd315399437512"
                    }}
                    style={styles.ImageBackground_1_557}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c406/a9fb/3de3acb2153ab21e3036e20e88477971"
                  }}
                  style={styles.ImageBackground_1_558}
                />
              </View>
              <View style={styles.View_1_560}>
                <View style={styles.View_1_561} />
                <View style={styles.View_1_562}>
                  <View style={styles.View_1_563} />
                  <View style={styles.View_1_564}>
                    <View style={styles.View_1_565} />
                    <View style={styles.View_1_566}>
                      <View style={styles.View_1_567}>
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d2de/e343/af5ad82de861c7f37f787880c305eb28"
                          }}
                          style={styles.ImageBackground_1_568}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f449/ad8e/5b14605e4d180a97cad88cd40d87a026"
                          }}
                          style={styles.ImageBackground_1_570}
                        />
                        <ImageBackground
                          source={{
                            uri:
                              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a7ca/9aca/fc630c21244e0218320d9992bd01e721"
                          }}
                          style={styles.ImageBackground_1_571}
                        />
                      </View>
                    </View>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2ab9/f74d/834d4907399495a45f882c398a36d33f"
                      }}
                      style={styles.ImageBackground_1_573}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/56f4/99c7/bfc5fb365013c2d60e43b7a43c788422"
                      }}
                      style={styles.ImageBackground_1_574}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0687/a26c/b68eb1a50de35b8ea4606046fef62385"
                      }}
                      style={styles.ImageBackground_1_575}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a7c/4a63/7fe654079a5ff43dcdaaa800b58bf620"
                      }}
                      style={styles.ImageBackground_1_576}
                    />
                  </View>
                </View>
                <View style={styles.View_1_577}>
                  <Text style={styles.Text_1_577}>
                    Getting first seed funding checklist
                  </Text>
                </View>
                <View style={styles.View_1_578}>
                  <View style={styles.View_1_579}>
                    <Text style={styles.Text_1_579}>Ankur Warikoo</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4d99/5331/5179d83d911507113ce34f1add4c69b9"
                    }}
                    style={styles.ImageBackground_1_580}
                  />
                </View>
                <ImageBackground
                  source={{
                    uri:
                      "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb22/fc3f/7f053fbd1bf222fe3b2a7cf98f23dfc8"
                  }}
                  style={styles.ImageBackground_1_581}
                />
              </View>
            </TouchableOpacity>
            <View style={styles.View_1_583}>
              <View style={styles.View_1_584}>
                <Text style={styles.Text_1_584}>My Courses</Text>
              </View>
              <View style={styles.View_1_585}>
                <Text style={styles.Text_1_585}>View All</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_1_586}>
            <View style={styles.View_1_587}>
              <Text style={styles.Text_1_587}>Courses by Mentors</Text>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_1_588}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1_104"))
              }
            >
              <View style={styles.View_1_589}>
                <View style={styles.View_1_590} />
                <View style={styles.View_1_591}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dc7f/8b74/b38c6469ee4aa833b1e5814daefd086d"
                    }}
                    style={styles.ImageBackground_1_592}
                  />
                  <View style={styles.View_1_593}>
                    <View style={styles.View_1_594}>
                      <Text style={styles.Text_1_594}>Ankur Warikoo</Text>
                    </View>
                    <View style={styles.View_1_595}>
                      <Text style={styles.Text_1_595}>
                        Founder Nearby | Mentor
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.View_1_596}>
                <View style={styles.View_1_597} />
                <View style={styles.View_1_598}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/01b4/8b83/d90ab5181a8e7d754d460789cb06c0bf"
                    }}
                    style={styles.ImageBackground_1_599}
                  />
                  <View style={styles.View_1_600}>
                    <View style={styles.View_1_601}>
                      <Text style={styles.Text_1_601}>Kunal Shah</Text>
                    </View>
                    <View style={styles.View_1_602}>
                      <Text style={styles.Text_1_602}>Founder CRED</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.View_1_603} />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1_480: {
    width: wp("136.95652173913044%"),
    minWidth: wp("136.95652173913044%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_481: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(245, 248, 255, 1)",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40
  },
  View_1_482: {
    width: wp("136.95652173913044%"),
    minWidth: wp("136.95652173913044%"),
    height: hp("118.98907103825135%"),
    minHeight: hp("118.98907103825135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_483: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("18.579234972677597%"),
    minHeight: hp("18.579234972677597%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("18.579234972677597%")
  },
  View_1_484: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_484: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_485: {
    width: wp("88.16425120772948%"),
    minWidth: wp("88.16425120772948%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371980695%"),
    top: hp("12.021857923497269%")
  },
  View_1_486: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_487: {
    width: wp("73.67149758454107%"),
    minWidth: wp("73.67149758454107%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_488: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("1.6393442622950793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_489: {
    width: wp("4.3478260869565215%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.7246376811594217%")
  },
  View_1_492: {
    width: wp("27.294685990338163%"),
    minWidth: wp("27.294685990338163%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.594202898550726%"),
    top: hp("1.9125683060109218%"),
    justifyContent: "flex-start"
  },
  Text_1_492: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_493: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.57004830917873%"),
    top: hp("0%")
  },
  View_1_494: {
    width: wp("11.594202898550725%"),
    minWidth: wp("11.594202898550725%"),
    height: hp("6.557377049180328%"),
    minHeight: hp("6.557377049180328%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_495: {
    width: wp("5.797101449275362%"),
    minWidth: wp("5.797101449275362%"),
    height: hp("3.278688524590164%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("1.6393442622950793%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_496: {
    width: wp("5.314009661835748%"),
    height: hp("2.459016393442623%"),
    top: hp("0.4098360655737707%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.24154589371981672%")
  },
  View_1_506: {
    width: wp("88.40579710144928%"),
    minWidth: wp("88.40579710144928%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("7.377049180327869%")
  },
  View_1_507: {
    width: wp("40.57971014492754%"),
    minWidth: wp("40.57971014492754%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.2295081967213113%")
  },
  TouchableOpacity_1_508: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_509: {
    width: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_1_511: {
    width: wp("29.951690821256037%"),
    minWidth: wp("29.951690821256037%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_1_511: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_512: {
    width: wp("12.077294685990339%"),
    minWidth: wp("12.077294685990339%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.32850241545894%"),
    top: hp("0%"),
    resizeMode: "cover",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  View_1_513: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_514: {
    width: wp("9.602864583333332%"),
    minWidth: wp("9.602864583333332%"),
    height: hp("1.5158731429303278%"),
    minHeight: hp("1.5158731429303278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.227119187801932%"),
    top: hp("2.2086721951844264%")
  },
  ImageBackground_1_515: {
    width: wp("5.917874396135265%"),
    minWidth: wp("5.917874396135265%"),
    height: hp("1.5710382513661203%"),
    minHeight: hp("1.5710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90.57971014492753%"),
    top: hp("2.3224043715846996%")
  },
  View_1_518: {
    width: wp("3.985507246376811%"),
    height: hp("1.366120218579235%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43478260869566%")
  },
  ImageBackground_1_519: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    height: hp("0.6147540983606558%"),
    minHeight: hp("0.6147540983606558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.7513661202185791%")
  },
  View_1_520: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.0869565217391255%"),
    top: hp("0.5464480874316937%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_1_521: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.173913043478251%"),
    top: hp("0.27322404371584685%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  View_1_522: {
    width: wp("0.7246376811594203%"),
    minWidth: wp("0.7246376811594203%"),
    height: hp("1.366120218579235%"),
    minHeight: hp("1.366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.2608695652173907%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)",
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1
  },
  ImageBackground_1_523: {
    width: wp("3.6889797247550336%"),
    minWidth: wp("3.6889797247550336%"),
    height: hp("1.49802888026003%"),
    minHeight: hp("1.49802888026003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85.74879227053141%"),
    top: hp("2.3224043715846996%")
  },
  View_1_524: {
    width: wp("130.91787439613526%"),
    minWidth: wp("130.91787439613526%"),
    height: hp("50.95628415300546%"),
    minHeight: hp("50.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("41.53005464480874%")
  },
  TouchableOpacity_1_525: {
    width: wp("130.91787439613526%"),
    minWidth: wp("130.91787439613526%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890711%")
  },
  View_1_526: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_527: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_528: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("30.327868852459012%"),
    justifyContent: "flex-start"
  },
  Text_1_528: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_529: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("39.61748633879781%")
  },
  View_1_530: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352659%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_1_530: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_531: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_532: {
    width: wp("26.889362427347525%"),
    minWidth: wp("26.889362427347525%"),
    height: hp("23.224043715846996%"),
    minHeight: hp("23.224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.115942028985508%"),
    top: hp("4.37158469945355%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_1_533: {
    width: wp("7.353719996945293%"),
    minWidth: wp("7.353719996945293%"),
    height: hp("1.9654865473345982%"),
    minHeight: hp("1.9654865473345982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.306420072841185%"),
    top: hp("13.892495827596697%")
  },
  ImageBackground_1_534: {
    width: wp("7.353719996945293%"),
    minWidth: wp("7.353719996945293%"),
    height: hp("1.9654865473345982%"),
    minHeight: hp("1.9654865473345982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.306420072841185%"),
    top: hp("13.892495827596697%")
  },
  ImageBackground_1_535: {
    width: wp("4.8495472341343975%"),
    minWidth: wp("4.8495472341343975%"),
    height: hp("3.2541866510943636%"),
    minHeight: hp("3.2541866510943636%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.435190878279222%")
  },
  ImageBackground_1_536: {
    width: wp("3.745600106059641%"),
    minWidth: wp("3.745600106059641%"),
    height: hp("3.0059762339774374%"),
    minHeight: hp("3.0059762339774374%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.143735139266305%"),
    top: hp("10.541229039593482%")
  },
  ImageBackground_1_537: {
    width: wp("20.53816975026891%"),
    minWidth: wp("20.53816975026891%"),
    height: hp("14.22546053193306%"),
    minHeight: hp("14.22546053193306%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3870088881340585%"),
    top: hp("3.7965691154771832%")
  },
  ImageBackground_1_538: {
    width: wp("20.549403757288836%"),
    minWidth: wp("20.549403757288836%"),
    height: hp("12.98747766213339%"),
    minHeight: hp("12.98747766213339%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4113639794685966%"),
    top: hp("10.236542081572317%")
  },
  ImageBackground_1_539: {
    width: wp("4.93354106294936%"),
    minWidth: wp("4.93354106294936%"),
    height: hp("8.675384521484375%"),
    minHeight: hp("8.675384521484375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1149383397493935%"),
    top: hp("3.7344447901991487%")
  },
  ImageBackground_1_540: {
    width: wp("4.539071880101006%"),
    minWidth: wp("4.539071880101006%"),
    height: hp("5.6790044398907105%"),
    minHeight: hp("5.6790044398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.8635625424592348%"),
    top: hp("4.151335961180308%")
  },
  ImageBackground_1_541: {
    width: wp("10.990058051215277%"),
    minWidth: wp("10.990058051215277%"),
    height: hp("6.2094693626862405%"),
    minHeight: hp("6.2094693626862405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3273967061065832%"),
    top: hp("0%")
  },
  ImageBackground_1_542: {
    width: wp("4.837149928733346%"),
    minWidth: wp("4.837149928733346%"),
    height: hp("8.430704523305424%"),
    minHeight: hp("8.430704523305424%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.369115857110508%"),
    top: hp("4.121253008399506%")
  },
  ImageBackground_1_543: {
    width: wp("3.259423389526957%"),
    minWidth: wp("3.259423389526957%"),
    height: hp("5.304080150166496%"),
    minHeight: hp("5.304080150166496%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.381252712673614%"),
    top: hp("4.505929790559371%")
  },
  ImageBackground_1_544: {
    width: wp("5.018492251778571%"),
    minWidth: wp("5.018492251778571%"),
    height: hp("3.8034850782383987%"),
    minHeight: hp("3.8034850782383987%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.257844934140998%"),
    top: hp("2.45749155680339%")
  },
  ImageBackground_1_545: {
    width: wp("6.535908795785213%"),
    minWidth: wp("6.535908795785213%"),
    height: hp("4.427722243011975%"),
    minHeight: hp("4.427722243011975%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.615796959918477%"),
    top: hp("1.3405179716850242%")
  },
  View_1_546: {
    width: wp("1.4364634159106564%"),
    minWidth: wp("1.4364634159106564%"),
    height: hp("1.706094559424562%"),
    minHeight: hp("1.706094559424562%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.306420072841185%"),
    top: hp("10.724030166375826%"),
    borderTopLeftRadius: 18.55451011657715,
    borderTopRightRadius: 18.55451011657715,
    borderBottomLeftRadius: 18.55451011657715,
    borderBottomRightRadius: 18.55451011657715
  },
  View_1_547: {
    width: wp("1.3646403372575695%"),
    minWidth: wp("1.3646403372575695%"),
    height: hp("1.6654733751640944%"),
    minHeight: hp("1.6654733751640944%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.980478185386474%"),
    top: hp("10.764658776788771%"),
    borderTopLeftRadius: 18.55451011657715,
    borderTopRightRadius: 18.55451011657715,
    borderBottomLeftRadius: 18.55451011657715,
    borderBottomRightRadius: 18.55451011657715
  },
  ImageBackground_1_548: {
    width: wp("5.068022502217316%"),
    minWidth: wp("5.068022502217316%"),
    height: hp("1.198328388193266%"),
    minHeight: hp("1.198328388193266%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.298078601487013%"),
    top: hp("8.713281350057635%")
  },
  ImageBackground_1_549: {
    width: wp("5.044192162112913%"),
    minWidth: wp("5.044192162112913%"),
    height: hp("0.7872071422514368%"),
    minHeight: hp("0.7872071422514368%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.324454634661837%"),
    top: hp("8.522700742294226%")
  },
  ImageBackground_1_550: {
    width: wp("2.5612690598492462%"),
    minWidth: wp("2.5612690598492462%"),
    height: hp("3.121306466274574%"),
    minHeight: hp("3.121306466274574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.74835706333031%"),
    top: hp("10.934088660068198%")
  },
  ImageBackground_1_551: {
    width: wp("7.7240616803008%"),
    minWidth: wp("7.7240616803008%"),
    height: hp("5.349586049064261%"),
    minHeight: hp("5.349586049064261%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.652971792912133%"),
    top: hp("0.4124542403090885%")
  },
  ImageBackground_1_552: {
    width: wp("7.353719996945293%"),
    minWidth: wp("7.353719996945293%"),
    height: hp("1.9654865473345982%"),
    minHeight: hp("1.9654865473345982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.306420072841185%"),
    top: hp("13.892495827596697%")
  },
  ImageBackground_1_553: {
    width: wp("9.626400528322671%"),
    minWidth: wp("9.626400528322671%"),
    height: hp("2.384966449007962%"),
    minHeight: hp("2.384966449007962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.041488573746982%"),
    top: hp("15.459036696804027%")
  },
  ImageBackground_1_554: {
    width: wp("7.038669770466532%"),
    minWidth: wp("7.038669770466532%"),
    height: hp("2.884112290345906%"),
    minHeight: hp("2.884112290345906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.289882788911534%"),
    top: hp("19.05136733758645%")
  },
  ImageBackground_1_555: {
    width: wp("19.585918113229354%"),
    minWidth: wp("19.585918113229354%"),
    height: hp("2.884112290345906%"),
    minHeight: hp("2.884112290345906%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.112000396286231%"),
    top: hp("20.06691270838669%")
  },
  ImageBackground_1_556: {
    width: wp("9.167695160649249%"),
    minWidth: wp("9.167695160649249%"),
    height: hp("2.327249089225394%"),
    minHeight: hp("2.327249089225394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.8714340136247%"),
    top: hp("16.87844906999765%")
  },
  ImageBackground_1_557: {
    width: wp("0.7096898728522701%"),
    minWidth: wp("0.7096898728522701%"),
    height: hp("0.5797739237384067%"),
    minHeight: hp("0.5797739237384067%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.641770220033216%"),
    top: hp("12.532038245696178%")
  },
  ImageBackground_1_558: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48309178743961%")
  },
  View_1_560: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%"),
    top: hp("0%")
  },
  View_1_561: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_1_562: {
    width: wp("47.46178521050347%"),
    height: hp("26.843140815776557%"),
    top: hp("4.508196721311478%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.729468599033822%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_1_563: {
    width: wp("47.46178521050347%"),
    minWidth: wp("47.46178521050347%"),
    height: hp("26.843140815776557%"),
    minHeight: hp("26.843140815776557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 29.47376823425293,
    borderTopRightRadius: 29.47376823425293,
    borderBottomLeftRadius: 29.47376823425293,
    borderBottomRightRadius: 29.47376823425293
  },
  View_1_564: {
    width: wp("47.46178889620131%"),
    minWidth: wp("47.46178889620131%"),
    height: hp("26.84314290031058%"),
    minHeight: hp("26.84314290031058%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000029485582729193993%"),
    top: hp("0.000004169068041903756%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_1_565: {
    width: wp("19.441077559466525%"),
    height: hp("15.692914118532276%"),
    top: hp("5.884839407081813%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.754159236299813%"),
    backgroundColor: "rgba(78, 64, 231, 1)",
    borderTopLeftRadius: 7.557376861572266,
    borderTopRightRadius: 7.557376861572266,
    borderBottomLeftRadius: 7.557376861572266,
    borderBottomRightRadius: 7.557376861572266
  },
  View_1_566: {
    width: wp("32.26829197095788%"),
    height: hp("20.132358738633453%"),
    top: hp("3.354888144738034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.260765481110354%")
  },
  View_1_567: {
    width: wp("29.663618520838053%"),
    height: hp("20.132358738633453%"),
    top: hp("-0.0000010422670015941549%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.604704778551479%")
  },
  ImageBackground_1_568: {
    width: wp("29.663618520838053%"),
    height: hp("20.132358738633453%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_570: {
    width: wp("29.663618520838053%"),
    height: hp("20.132358738633453%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_1_571: {
    width: wp("8.899086109106092%"),
    height: hp("5.033087600124339%"),
    top: hp("0.000003647934541106679%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.764528726034115%")
  },
  ImageBackground_1_573: {
    width: wp("7.581399834674338%"),
    height: hp("3.2606023256895975%"),
    top: hp("9.223493168262848%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.308940205597082%")
  },
  ImageBackground_1_574: {
    width: wp("11.21349887571473%"),
    height: hp("1.5486429297858901%"),
    top: hp("10.592723935028253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.994408648947015%")
  },
  ImageBackground_1_575: {
    width: wp("13.635018021588163%"),
    height: hp("1.5486430600692667%"),
    top: hp("15.386137415151126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.57349487894399%")
  },
  ImageBackground_1_576: {
    width: wp("2.7381800223087915%"),
    height: hp("1.5486427995025134%"),
    top: hp("15.386141584219189%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.519124348958343%")
  },
  View_1_577: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("30.327868852459012%"),
    justifyContent: "flex-start"
  },
  Text_1_577: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_578: {
    width: wp("31.40096618357488%"),
    minWidth: wp("31.40096618357488%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("39.61748633879781%")
  },
  View_1_579: {
    width: wp("22.22222222222222%"),
    minWidth: wp("22.22222222222222%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352666%"),
    top: hp("0.9562841530054698%"),
    justifyContent: "flex-start"
  },
  Text_1_579: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_580: {
    width: wp("6.763285024154589%"),
    minWidth: wp("6.763285024154589%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_581: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48309178743962%")
  },
  View_1_583: {
    width: wp("88.64734299516908%"),
    minWidth: wp("88.64734299516908%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_584: {
    width: wp("29.227053140096622%"),
    minWidth: wp("29.227053140096622%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_584: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_585: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338164%"),
    top: hp("1.0928961748633839%"),
    justifyContent: "flex-start"
  },
  Text_1_585: {
    color: "rgba(255, 80, 80, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_586: {
    width: wp("130.91787439613526%"),
    minWidth: wp("130.91787439613526%"),
    height: hp("15.710382513661203%"),
    minHeight: hp("15.710382513661203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.038647342995169%"),
    top: hp("96.85792349726776%")
  },
  View_1_587: {
    width: wp("50%"),
    minWidth: wp("50%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_587: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_588: {
    width: wp("130.91787439613526%"),
    minWidth: wp("130.91787439613526%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5.874316939890704%")
  },
  View_1_589: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_590: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_591: {
    width: wp("50.24154589371981%"),
    minWidth: wp("50.24154589371981%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("1.9125683060109253%")
  },
  ImageBackground_1_592: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_593: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309178%"),
    top: hp("0%")
  },
  View_1_594: {
    width: wp("34.54106280193236%"),
    minWidth: wp("34.54106280193236%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_594: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_595: {
    width: wp("36.71497584541063%"),
    minWidth: wp("36.71497584541063%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_1_595: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_596: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%"),
    top: hp("0%")
  },
  View_1_597: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("9.836065573770492%"),
    minHeight: hp("9.836065573770492%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_1_598: {
    width: wp("39.371980676328505%"),
    minWidth: wp("39.371980676328505%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("1.9125683060109253%")
  },
  ImageBackground_1_599: {
    width: wp("10.628019323671497%"),
    minWidth: wp("10.628019323671497%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_600: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    height: hp("5.601092896174864%"),
    minHeight: hp("5.601092896174864%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.526570048309182%"),
    top: hp("0%")
  },
  View_1_601: {
    width: wp("25.845410628019323%"),
    minWidth: wp("25.845410628019323%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_601: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_602: {
    width: wp("21.73913043478261%"),
    minWidth: wp("21.73913043478261%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.5519125683060224%"),
    justifyContent: "flex-start"
  },
  Text_1_602: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_603: {
    width: wp("46.85990338164252%"),
    minWidth: wp("46.85990338164252%"),
    height: hp("0.6830601092896175%"),
    minHeight: hp("0.6830601092896175%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.570048309178745%"),
    top: hp("118.30601092896175%"),
    backgroundColor: "rgba(42, 52, 71, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
