import * as React from "react";
import { useState } from "react";
import { getYardage } from "./utils";
import { Typography, Layout, InputNumber, Button, Radio } from "antd";
const { Title, Text } = Typography;

export const Calculators = () => {
  const [quiltWidth, setQuiltWidth] = useState(null);
  const [quiltLength, setQuiltLength] = useState(null);
  const [isMeasuredByBlocks, setIsMeasuredByBlocks] = useState(false);
  const [blockSize, setBlockSize] = useState(null);
  const [quiltBlockWidth, setQuiltBlockWidth] = useState(null);
  const [quiltBlockLength, setQuiltBlockLength] = useState(null);
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

  const clear = (clearBlockSize) => {
    setQuiltWidth(null);
    setQuiltLength(null);
    setQuiltBlockLength(null);
    setQuiltBlockWidth(null);
    if (clearBlockSize) setBlockSize(null);
  };

  return (
    <Layout>
      <Title>Some Handy Tools</Title>
      <Text>This all uses a conservative estimate of 42" fabric width</Text>
      <br />
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          flexWrap: "wrap",
        }}
      >
        <InputNumber
          addonBefore="Quilt Width"
          addonAfter={isMeasuredByBlocks ? "blocks" : "inches"}
          value={isMeasuredByBlocks ? quiltBlockWidth : quiltWidth}
          onChange={(value) => {
            if (isMeasuredByBlocks) {
              setQuiltBlockWidth(value);
              if (blockSize) setQuiltWidth(value * blockSize);
            } else {
              setQuiltWidth(value);
              setQuiltBlockWidth(null);
            }
          }}
          style={{ width: 240 }}
          min={1}
        />
        <InputNumber
          addonBefore="Quilt Length"
          addonAfter={isMeasuredByBlocks ? "blocks" : "inches"}
          value={isMeasuredByBlocks ? quiltBlockLength : quiltLength}
          onChange={(value) => {
            if (isMeasuredByBlocks) {
              setQuiltBlockLength(value);
              if (blockSize) setQuiltLength(value * blockSize);
            } else {
              setQuiltLength(value);
              setQuiltBlockLength(null);
            }
          }}
          style={{ width: 240 }}
          min={1}
        />

        <Button
          onClick={() => {
            clear(true);
          }}
        >
          Clear
        </Button>
      </Layout>
      <br />
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 20,
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <Radio.Group
          options={[
            { label: "Specify inches", value: false },
            { label: "Specify blocks", value: true },
          ]}
          value={isMeasuredByBlocks}
          onChange={({ target: { value } }) => {
            setIsMeasuredByBlocks(value);
            setBorderisAdditive(true);
            if (value) {
              clear(false);
            }
          }}
        />
        {isMeasuredByBlocks && (
          <InputNumber
            addonBefore="Finished block size"
            addonAfter="inches"
            value={blockSize}
            onChange={(value) => {
              setBlockSize(value);
              if (quiltBlockWidth) setQuiltWidth(quiltBlockWidth * value);
              if (quiltBlockLength) setQuiltLength(quiltBlockLength * value);
            }}
            step=".5"
            style={{ width: 290 }}
            min={1}
          />
        )}
      </Layout>
      <br />
      {isMeasuredByBlocks &&
        blockSize &&
        quiltBlockWidth &&
        quiltBlockLength && (
          <Text>
            Quilt dimensions: {quiltWidth}" x {quiltLength}"
          </Text>
        )}
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
        disabled={isMeasuredByBlocks}
        value={borderisAdditive}
        onChange={({ target: { value } }) => {
          setBorderisAdditive(value);
        }}
      />
    </Layout>
  );
};
