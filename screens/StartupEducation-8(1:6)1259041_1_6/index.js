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
      <View style={styles.View_1_7} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9864/9227/5952423c0328595b23b3c9657caa0a94"
        }}
        style={styles.ImageBackground_1_8}
      />
      <View style={styles.View_1_9} />
      <View style={styles.View_1_10}>
        <TouchableOpacity
          style={styles.TouchableOpacity_1_11}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_479"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12c5/acfe/8193121b2fee4991aec2e6d7898e8fb4"
            }}
            style={styles.ImageBackground_1_12}
          />
        </TouchableOpacity>
        <View style={styles.View_1_15}>
          <Text style={styles.Text_1_15}>Profile</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b9c0/51ac/cd21b0222c9575183967241340bbb1f4"
        }}
        style={styles.ImageBackground_1_16}
      />
      <View style={styles.View_1_17}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c2e9/6ec2/ca5d5b48beacb7190dbc14a7d17528bc"
          }}
          style={styles.ImageBackground_1_18}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8744/31d0/1fe62afb921fff3514c1578965a10679"
          }}
          style={styles.ImageBackground_1_19}
        />
        <View style={styles.View_1_22}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce7f/09fd/cad0625ca98932a77c79ae255e6e6560"
            }}
            style={styles.ImageBackground_1_23}
          />
          <View style={styles.View_1_24} />
          <View style={styles.View_1_25} />
          <View style={styles.View_1_26} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1ff/0c22/0b97200050a886088dbee23e6cec4be9"
          }}
          style={styles.ImageBackground_1_27}
        />
      </View>
      <View style={styles.View_1_28}>
        <View style={styles.View_1_29}>
          <Text style={styles.Text_1_29}>Akash Solanki</Text>
        </View>
        <View style={styles.View_1_30}>
          <Text style={styles.Text_1_30}>@antivirusakash</Text>
        </View>
      </View>
      <View style={styles.View_1_31} />
      <View style={styles.View_1_32}>
        <TouchableOpacity
          style={styles.TouchableOpacity_1_33}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("1_55"))
          }
        >
          <View style={styles.View_1_34}>
            <View style={styles.View_1_35} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0e06/47c9/40fbb4aa94b7fbd5063f314ee775b0a1"
              }}
              style={styles.ImageBackground_1_36}
            />
            <View style={styles.View_1_37}>
              <Text style={styles.Text_1_37}>
                Growing Startup without Sales Team
              </Text>
            </View>
            <View style={styles.View_1_38}>
              <View style={styles.View_1_39}>
                <Text style={styles.Text_1_39}>Kunal Shah</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c918/bc0b/a46277b332a85da110debf1b0794ef44"
                }}
                style={styles.ImageBackground_1_40}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4479/c87a/583e562f4fdd64c7ae3ed6021718ad23"
              }}
              style={styles.ImageBackground_1_41}
            />
          </View>
          <View style={styles.View_1_43}>
            <View style={styles.View_1_44} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b0da/aa5a/1319b1e162d540bca6b9758d1c12789a"
              }}
              style={styles.ImageBackground_1_45}
            />
            <View style={styles.View_1_46}>
              <Text style={styles.Text_1_46}>
                Find Powerful Tips for Wealth &amp; Success
              </Text>
            </View>
            <View style={styles.View_1_47}>
              <View style={styles.View_1_48}>
                <Text style={styles.Text_1_48}>Kunal Shah</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c918/bc0b/a46277b332a85da110debf1b0794ef44"
                }}
                style={styles.ImageBackground_1_49}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/364a/9de5/d716e35075b1d858e4a5f28c687b15f6"
              }}
              style={styles.ImageBackground_1_50}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_1_52}>
          <View style={styles.View_1_53}>
            <Text style={styles.Text_1_53}>Completed Courses</Text>
          </View>
          <View style={styles.View_1_54}>
            <Text style={styles.Text_1_54}>View All</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1_7: {
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
  ImageBackground_1_8: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_9: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("34.97267759562842%"),
    minHeight: hp("34.97267759562842%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(42, 52, 71, 1)"
  },
  View_1_10: {
    width: wp("27.536231884057973%"),
    minWidth: wp("27.536231884057973%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.797101449275362%"),
    top: hp("8.60655737704918%")
  },
  TouchableOpacity_1_11: {
    width: wp("7.729468599033816%"),
    minWidth: wp("7.729468599033816%"),
    height: hp("4.371584699453552%"),
    minHeight: hp("4.371584699453552%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_1_12: {
    width: wp("4.508856989911212%"),
    height: hp("2.5500912483924076%"),
    top: hp("0.9107454226968077%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6103256151871976%")
  },
  View_1_15: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("3.278688524590164%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.628019323671499%"),
    top: hp("0.5464480874316955%"),
    justifyContent: "flex-start"
  },
  Text_1_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_16: {
    width: wp("56.038647342995176%"),
    minWidth: wp("56.038647342995176%"),
    height: hp("31.693989071038253%"),
    minHeight: hp("31.693989071038253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21.980676328502415%"),
    top: hp("19.12568306010929%"),
    resizeMode: "cover",
    borderTopLeftRadius: 200,
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200
  },
  View_1_17: {
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
  ImageBackground_1_18: {
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
  ImageBackground_1_19: {
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
  View_1_22: {
    width: wp("3.985507246376811%"),
    height: hp("1.366120218579235%"),
    top: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80.43478260869566%")
  },
  ImageBackground_1_23: {
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
  View_1_24: {
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
  View_1_25: {
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
  View_1_26: {
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
  ImageBackground_1_27: {
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
  View_1_28: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    height: hp("8.743169398907105%"),
    minHeight: hp("8.743169398907105%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.502415458937197%"),
    top: hp("52.459016393442624%")
  },
  View_1_29: {
    width: wp("42.99516908212561%"),
    minWidth: wp("42.99516908212561%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_29: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_30: {
    width: wp("32.125603864734295%"),
    minWidth: wp("32.125603864734295%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555561%"),
    top: hp("6.010928961748633%"),
    justifyContent: "flex-start"
  },
  Text_1_30: {
    color: "rgba(112, 122, 141, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_31: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.934426229508205%"),
    backgroundColor: "rgba(222, 232, 251, 1)"
  },
  View_1_32: {
    width: wp("131.15942028985506%"),
    minWidth: wp("131.15942028985506%"),
    height: hp("50.95628415300546%"),
    minHeight: hp("50.95628415300546%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-36.71497584541063%"),
    top: hp("66.80327868852459%")
  },
  TouchableOpacity_1_33: {
    width: wp("130.91787439613526%"),
    minWidth: wp("130.91787439613526%"),
    height: hp("46.58469945355191%"),
    minHeight: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4.37158469945355%")
  },
  View_1_34: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%")
  },
  View_1_35: {
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
  ImageBackground_1_36: {
    width: wp("47.34299516908212%"),
    height: hp("30.87431693989071%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753621%")
  },
  View_1_37: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("30.327868852459005%"),
    justifyContent: "flex-start"
  },
  Text_1_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_38: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.89855072463768%"),
    top: hp("39.61748633879782%")
  },
  View_1_39: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352655%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_1_39: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_40: {
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
  ImageBackground_1_41: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("1.3661202185792405%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48309178743961%")
  },
  View_1_43: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("46.58469945355191%"),
    minHeight: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67.8743961352657%"),
    top: hp("0%")
  },
  View_1_44: {
    width: wp("63.04347826086957%"),
    minWidth: wp("63.04347826086957%"),
    height: hp("45.08196721311475%"),
    minHeight: hp("45.08196721311475%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1.5027322404371688%"),
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  ImageBackground_1_45: {
    width: wp("47.34299516908212%"),
    height: hp("30.87431693989071%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.971014492753625%")
  },
  View_1_46: {
    width: wp("57.2463768115942%"),
    minWidth: wp("57.2463768115942%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("31.830601092896174%"),
    justifyContent: "flex-start"
  },
  Text_1_46: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_47: {
    width: wp("26.08695652173913%"),
    minWidth: wp("26.08695652173913%"),
    height: hp("3.825136612021858%"),
    minHeight: hp("3.825136612021858%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.898550724637687%"),
    top: hp("41.12021857923499%")
  },
  View_1_48: {
    width: wp("16.908212560386474%"),
    minWidth: wp("16.908212560386474%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9.178743961352652%"),
    top: hp("0.9562841530054556%"),
    justifyContent: "flex-start"
  },
  Text_1_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_49: {
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
  ImageBackground_1_50: {
    width: wp("9.66183574879227%"),
    height: hp("5.46448087431694%"),
    top: hp("2.8688524590164093%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50.48309178743961%")
  },
  View_1_52: {
    width: wp("88.64734299516908%"),
    minWidth: wp("88.64734299516908%"),
    height: hp("4.781420765027322%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42.51207729468599%"),
    top: hp("0%")
  },
  View_1_53: {
    width: wp("49.51690821256038%"),
    minWidth: wp("49.51690821256038%"),
    minHeight: hp("4.781420765027322%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_53: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_54: {
    width: wp("15.70048309178744%"),
    minWidth: wp("15.70048309178744%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.94685990338165%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_54: {
    color: "rgba(255, 80, 80, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
