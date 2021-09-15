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
      <View style={styles.View_1_605} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/df0c/0f94/7fb74dcfe2ec4d39c35c69957a2c4e49"
        }}
        style={styles.ImageBackground_1_606}
      />
      <View style={styles.View_1_607}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ac52/da6c/4176e5111afdcd54e32d0bad42b9f8a6"
          }}
          style={styles.ImageBackground_1_608}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/75e0/17ae/c7e6d888a52a2d7056c71efbaccc4ec3"
          }}
          style={styles.ImageBackground_1_609}
        />
        <View style={styles.View_1_610}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f1d0/fdad/e730f2a27ee6bbdf72d3ae34141c59b8"
            }}
            style={styles.ImageBackground_1_611}
          />
          <View style={styles.View_1_612}>
            <View style={styles.View_1_613}>
              <View style={styles.View_1_614}>
                <Text style={styles.Text_1_614}>
                  Launch and Grow your startup
                </Text>
              </View>
              <View style={styles.View_1_615}>
                <Text style={styles.Text_1_615}>
                  The average company forecasts a growth 178% in revenues for
                  their first year, 100% for second, and 71% for third.
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.TouchableOpacity_1_616}
              onPress={() =>
                this.props.navigation.navigate(getNavigationScreen("1_479"))
              }
            >
              <View style={styles.View_1_617} />
              <View style={styles.View_1_618}>
                <Text style={styles.Text_1_618}>Get Started</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e9d/553a/8cff6aebfa67a71e201ca1da8ad80651"
        }}
        style={styles.ImageBackground_1_619}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122.40437158469946%") },
  View_1_605: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122.40437158469946%"),
    minHeight: hp("122.40437158469946%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_1_606: {
    width: wp("45.893719806763286%"),
    height: hp("25.956284153005466%"),
    top: hp("15.163934426229508%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.966183574879227%")
  },
  View_1_607: {
    width: wp("116.42512077294687%"),
    minWidth: wp("116.42512077294687%"),
    height: hp("193.0327868852459%"),
    minHeight: hp("193.0327868852459%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5.555555555555555%"),
    top: hp("-70.62841530054644%")
  },
  ImageBackground_1_608: {
    width: wp("116.42512077294687%"),
    minWidth: wp("116.42512077294687%"),
    height: hp("65.98360655737704%"),
    minHeight: hp("65.98360655737704%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_1_609: {
    width: wp("0.30914858919410887%"),
    minWidth: wp("0.30914858919410887%"),
    height: hp("15.451887787365523%"),
    minHeight: hp("15.451887787365523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55.611460220410635%"),
    top: hp("51.193954384392065%")
  },
  View_1_610: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59.42622950819673%"),
    minHeight: hp("59.42622950819673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.555555555555555%"),
    top: hp("133.60655737704917%")
  },
  ImageBackground_1_611: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("59.42622950819673%"),
    minHeight: hp("59.42622950819673%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_612: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    height: hp("46.58469945355191%"),
    minHeight: hp("46.58469945355191%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.454106280193237%"),
    top: hp("8.196721311475407%")
  },
  View_1_613: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    height: hp("34.2896174863388%"),
    minHeight: hp("34.2896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_1_614: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    minHeight: hp("14.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_1_614: {
    color: "rgba(42, 52, 71, 1)",
    fontSize: 29,
    fontWeight: "800",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_1_615: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    minHeight: hp("18.442622950819672%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15.84699453551913%"),
    justifyContent: "flex-start"
  },
  Text_1_615: {
    color: "rgba(112, 122, 141, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_1_616: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("38.387978142076506%")
  },
  View_1_617: {
    width: wp("83.09178743961353%"),
    minWidth: wp("83.09178743961353%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderTopLeftRadius: 60,
    borderTopRightRadius: 60,
    borderBottomLeftRadius: 60,
    borderBottomRightRadius: 60
  },
  View_1_618: {
    width: wp("28.743961352657006%"),
    minWidth: wp("28.743961352657006%"),
    minHeight: hp("6.147540983606557%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.29468599033816%"),
    top: hp("1.092896174863398%"),
    justifyContent: "flex-start"
  },
  Text_1_618: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_1_619: {
    width: wp("42.270531400966185%"),
    height: hp("23.90710382513661%"),
    top: hp("1.912568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44.44444444444444%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
