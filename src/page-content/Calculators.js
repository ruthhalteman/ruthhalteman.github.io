import * as React from "react";
import { useState } from "react";
import { getYardage } from "./utils";
import { Typography, Layout, InputNumber, Button, Radio } from "antd";
const { Title, Text } = Typography;

export const Calculators = () => {
  const [quiltWidth, setQuiltWidth] = useState(null);
  const [quiltLength, setQuiltLength] = useState(null);
  const [binding, setBinding] = useState(null);
  const [border, setBorder] = useState(null);
  const [borderisAdditive, setBorderisAdditive] = useState(true);

  const assumedFabricWidth = 42;

  const bindingStripCount = Math.ceil(
    (quiltLength * 2 + quiltWidth * 2) / assumedFabricWidth
  );
  const borderStripCount = borderisAdditive
    ? Math.ceil((quiltLength * 2 + quiltWidth * 2 + border * 4) / 42)
    : Math.ceil(
        ((quiltLength - border) * 2 + (quiltWidth - border) * 2 + border * 4) /
          assumedFabricWidth
      );

  return (
    <Layout>
      <Title>Some Handy Tools</Title>
      <Text>This all uses a conservative estimate of 42" fabric width</Text>
      <br />
      <Layout style={{ display: "flex", flexDirection: "row", gap: 20 }}>
        <InputNumber
          addonBefore="Quilt Width"
          addonAfter="inches"
          value={quiltWidth}
          onChange={(value) => {
            setQuiltWidth(value);
          }}
          style={{ width: 240 }}
          min={1}
        />
        <InputNumber
          addonBefore="Quilt Length"
          addonAfter="inches"
          value={quiltLength}
          onChange={(value) => {
            setQuiltLength(value);
          }}
          style={{ width: 240 }}
          min={1}
        />{" "}
        <Button
          onClick={() => {
            setQuiltWidth(null);
            setQuiltLength(null);
          }}
        >
          Clear
        </Button>
      </Layout>
      <Title level={4}>Binding</Title>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <InputNumber
          addonBefore="Strip Width"
          addonAfter="inches"
          value={binding}
          onChange={(value) => {
            setBinding(value);
          }}
          step=".25"
          style={{ width: 240 }}
          min={1}
          max={4}
        />
        {binding && quiltLength && quiltWidth && (
          <Text>
            {getYardage(bindingStripCount, binding)} needed, cut{" "}
            {bindingStripCount} strip{bindingStripCount > 1 ? "s" : ""}
          </Text>
        )}
      </Layout>
      {/* <Title level={4}>Backing</Title>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        {binding && quiltLength && quiltWidth && (
          <Text>
            {getYardage(bindingStripCount, binding)} needed, cut{" "}
            {bindingStripCount} strips
          </Text>
        )}
      </Layout> */}
      <Title level={4}>Borders</Title>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
        }}
      >
        <InputNumber
          addonBefore="Border Width"
          addonAfter="inches"
          value={border}
          onChange={(value) => {
            setBorder(value);
          }}
          step=".5"
          style={{ width: 240 }}
          min={1}
          max={10}
        />

        {border && quiltLength && quiltWidth && (
          <Text>
            {getYardage(borderStripCount, border)} needed, cut{" "}
            {borderStripCount} strip{borderStripCount > 1 ? "s" : ""}
          </Text>
        )}
      </Layout>{" "}
      <br />{" "}
      <Radio.Group
        options={[
          { label: "Add to quilt dimensions", value: true },
          { label: "Part of quilt dimensions", value: false },
        ]}
        value={borderisAdditive}
        onChange={({ target: { value } }) => {
          setBorderisAdditive(value);
        }}
      />
      <br />
      <Text>
        Might need to adjust for seam allowance stuff to be accurate in all
        cases. But if you round up this should all be fine
      </Text>
    </Layout>
  );
};
