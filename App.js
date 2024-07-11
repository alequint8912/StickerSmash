import { StyleSheet, Pressable, Text, ScrollView } from "react-native";
//import StickerSmash from "./pages/stickerSmash";
import ModalControl from "./components/ModalControl/ModalControl";
import { View } from "react-native";
import { useState } from "react";
import Switch from "./components/Switch/Switch";
import InlineControl from "./components/InlineControl/InlineControl";
import TableHeader from "./components/TableHeader/TableHeader";

export default function App() {
  return (
    <ScrollView
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          borderWidth: 1,
          marginTop: 50,
          flexDirection: "column",
          paddingHorizontal: 10,
          marginBottom: 50,
          display: "flex",
          //gap: 10,
        }}
      >
        {/* <View
        style={{ width: 200, height: 50, borderWidth: 1, borderColor: "red" }}
      >
        <Switch />
        </View> */}
        <View style={{ width: "100%", flexDirection: "column", gap: 5 }}>
          <View style={{ gap: 10, width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="A"
              label1={"DAY / MONTH / YEAR"}
              customStyles={{ width: "24%" }}
            />
            <ModalControl
              variant="A"
              label1={"MEMBERSHIP"}
              customStyles={{ width: "24%" }}
            />
            <ModalControl
              variant="A"
              label1={"VLO"}
              customStyles={{ width: "24%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Member 1"}
              customStyles={{ width: "50%" }}
            />
            <ModalControl
              variant="B"
              label1={"CURP (1)"}
              customStyles={{ width: "25%" }}
            />
            <ModalControl
              variant="B"
              label1={"RFC (1)"}
              customStyles={{ width: "25%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Member 2"}
              customStyles={{ width: "50%" }}
            />
            <ModalControl
              variant="B"
              label1={"CURP (1)"}
              customStyles={{ width: "25%" }}
            />
            <ModalControl
              variant="B"
              label1={"RFC (1)"}
              customStyles={{ width: "25%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Day birth (1)"}
              customStyles={{ width: "33.33%" }}
            />
            <ModalControl
              variant="B"
              label1={"Day birth (2)"}
              customStyles={{ width: "33.33%" }}
            />
            <ModalControl
              variant="B"
              label1={"Fiscal Regime"}
              customStyles={{ width: "33.33%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Address"}
              customStyles={{ width: "50%" }}
            />
            <ModalControl
              variant="B"
              label1={"Business Address"}
              customStyles={{ width: "50%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Country"}
              customStyles={{ width: "28%" }}
            />
            <ModalControl
              variant="B"
              label1={"State"}
              customStyles={{ width: "28%" }}
            />
            <ModalControl
              variant="B"
              label1={"City"}
              customStyles={{ width: "28%" }}
            />
            <ModalControl
              variant="B"
              label1={"Zip Code"}
              customStyles={{ width: "16%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Home Phone"}
              customStyles={{ width: "33.33%" }}
            />
            <ModalControl
              variant="B"
              label1={"Work Phone"}
              customStyles={{ width: "33.33%" }}
            />
            <ModalControl
              variant="B"
              label1={"Mobile"}
              customStyles={{ width: "33.33%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"E-MAIL"}
              customStyles={{ width: "50%" }}
            />
            <ModalControl
              variant="B"
              label1={"E-MAIL"}
              customStyles={{ width: "50%" }}
            />
          </View>
          <View style={{ width: "100%", flexDirection: "row" }}>
            <ModalControl
              variant="B"
              label1={"Membership type"}
              customStyles={{ width: "50%" }}
            />
            <ModalControl
              variant="B"
              label1={"vigencia"}
              customStyles={{ width: "50%" }}
            />
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            borderWidth: 1,
            borderColor: "#8399b9",
            marginTop: 10,
          }}
        >
          <TableHeader
            label={"previous contracts"}
            customStyles={{
              width: "15%",
              borderRightWidth: 1,
              borderRightColor: "#8399b9",
            }}
          />
          <TableHeader label={"concepts"} customStyles={{ width: "30%" }} />
          <TableHeader
            label={"amounts"}
            customStyles={{
              width: "16.8%",
              borderRightWidth: 1,
              borderRightColor: "#8399b9",
            }}
          />
          <TableHeader label={"cash out"} customStyles={{ width: "38.2%" }} />
        </View>

        <View style={{ width: "100%", flexDirection: "row" }}>
          <View
            style={{
              width: "15%",
              borderWidth: 1,
              borderColor: "#8399b9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Membership Number</Text>
          </View>

          <View style={{ width: "85%", flexDirection: "column" }}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <InlineControl
                width={"55%"}
                label1={"PRICE"}
                label2={"$"}
                label3={"MXN"}
              />
              <InlineControl
                width={"45%"}
                label1={"$"}
                label2={""}
                label3={"MXN"}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <InlineControl
                width={"55%"}
                label1={"PREV. CONTACT"}
                label2={"$"}
                label3={"MXN"}
              />
              <InlineControl
                width={"45%"}
                label1={"DUE DATE"}
                label2={""}
                label3={""}
              />
            </View>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <InlineControl
                width={"55%"}
                label1={"UP GRADE"}
                label2={"$"}
                label3={"MXN"}
              />
              <InlineControl
                width={"45%"}
                label1={"ADP"}
                label2={""}
                label3={""}
              />
            </View>
          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row" }}>
          <View
            style={{
              width: "15%",
              borderWidth: 1,
              borderColor: "#8399b9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text>Unused Benefits</Text>
          </View>

          <View style={{ width: "46.5%", flexDirection: "column" }}>
            <InlineControl
              width={"100%"}
              label1={"DOWN PAYMENT"}
              label2={"$"}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"EQUITY"}
              label2={"$"}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"DOWN PAYMENT"}
              label2={"$"}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"AMOUNT TO BE FINANCED"}
              label2={"$"}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"BALANCE"}
              label2={"$"}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"AMOUNT TO BE FINANCED"}
              label2={"$"}
              label3={"MXN"}
            />
          </View>
          <View
            style={{
              width: "38.5%",
              flexDirection: "column",
              borderWidth: 1,
              borderColor: "#8399b9",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <InlineControl
              width={"100%"}
              label1={"$"}
              label2={""}
              label3={"MXN"}
            />
            <InlineControl
              width={"100%"}
              label1={"DUE DATE"}
              label2={""}
              label3={""}
              customStyle={{ borderWidth: 0, borderBottomWidth: 1, flex: 1 }}
            />
            <InlineControl
              width={"100%"}
              label1={"EXCHANGE RATE"}
              label2={""}
              label3={""}
              customStyle={{ borderWidth: 0, borderBottomWidth: 1, flex: 1 }}
            />
            <View
              style={{
                width: "100%",
                height: 40,
                borderWidth: 1,
                borderColor: "#8399b9",
              }}
            ></View>
          </View>
        </View>

        <View style={{ width: "100%", flexDirection: "row" }}>
          <ModalControl
            variant="C"
            label1={"Payment plan"}
            customStyles={{ width: "7%" }}
          />
          <ModalControl
            variant="C"
            label1={"Monthly payments"}
            label2={"$"}
            label3={"MXN"}
            customStyles={{ width: "19%", paddingHorizontal: 7 }}
          />
          <ModalControl
            variant="C"
            label1={"Service Fee"}
            label2={"$"}
            label3={"MXN"}
            customStyles={{ width: "17%", paddingHorizontal: 7 }}
          />
          <ModalControl
            variant="C"
            label1={"Total Monthly Payment"}
            label2={"$"}
            label3={"MXN"}
            customStyles={{ width: "20%", paddingHorizontal: 7 }}
          />
          <ModalControl
            variant="C"
            label1={"Interest rate"}
            label3={"%"}
            customStyles={{ width: "15%", paddingRight: 7 }}
          />
          <ModalControl
            variant="C"
            label1={"Day"}
            customStyles={{ width: "7%" }}
          />
          <ModalControl
            variant="C"
            label1={"Auto Billing Monthly Payments"}
            customStyles={{ width: "15%" }}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
