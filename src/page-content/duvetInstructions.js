import * as React from "react";
import { useState } from "react";
import { Typography, Layout, Table, InputNumber, Button } from "antd";
const { Title, Text } = Typography;

export const Duvet = () => {
  const [duvetWidth, setDuvetWidth] = useState(null);
  const [duvetLength, setDuvetLength] = useState(null);

  const cutColumns = [
    { title: "Part", dataIndex: "part", key: "part" },
    { title: "Width", dataIndex: "width", key: "width" },
    { title: "Length", dataIndex: "length", key: "length" },
  ];
  const cutData = [
    {
      key: "1",
      part: "Top",
      width: duvetWidth
        ? duvetWidth + 1.5 + '"'
        : `The same width as your duvet + 1.5"`,
      length: duvetLength ? duvetLength + '"' : "The same height as your duvet",
    },
    {
      key: "2",
      part: "Underside",
      width: duvetWidth ? duvetWidth + 1.5 + '"' : "The same width as the top",
      length: duvetLength
        ? duvetLength + 4.5 + '"'
        : `The same height as the top + 4.5"`,
    },
    {
      key: "3",
      part: "Underside Flap",
      width: duvetWidth ? duvetWidth + 1.5 + '"' : "The same width as the top",
      length: `5"`,
    },
  ];
  return (
    <Layout>
      <Title>Make a duvet cover</Title>
      <Text>
        Inspired by one from West Elm, but with enclosed seams! Prerequisites:
        basic sewing skills. This will be clearer with some visuals, which I
        haven't gotten around to making yet.
      </Text>
      <Title level={2}>Materials</Title>
      <Text>
        <b>Top:</b> You can use whatever you want. Some considerations are
        width, sturdiness (it'll get lots of use and washing), and
        breathability.
      </Text>
      <br />
      <Text>
        <b> Underside:</b> You'll want this fabric to be softer and simpler, it
        will be the one against your skin if you aren't using a seperate top
        sheet.
      </Text>
      <br />
      <Text>
        If you're having trouble finding wide enough fabrics an easy way to go
        is to use bedsheets. You can easily thrift them for cheap or buy a set
        (often still cheaper than a duvet cover).
      </Text>
      <br />
      <Text>
        <b>Optional Misc:</b>
        <ul>
          <li>
            You can buy tape with snaps preinstalled along it at fabric stores
            which makes the corner loops that hold the insert in place very
            easy. Otherwise you can use some sort of twill tape or fabric for a
            tie, or install snaps on them yourself.
          </li>
          <li>
            Buttons for closing the bottom opening. You might not need to bother
            with them if the duvet isn't very wide
          </li>
        </ul>
      </Text>
      <Title level={3}>Cut one of each:</Title>
      <Table
        columns={cutColumns}
        dataSource={cutData}
        pagination={false}
      ></Table>
      <br />
      <Text>
        <b>Or calculate for me:</b>
      </Text>
      <Layout
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 15,
          flexWrap: "wrap",
        }}
      >
        <InputNumber
          addonBefore="Duvet width:"
          addonAfter="inches"
          value={duvetWidth}
          onChange={(value) => {
            setDuvetWidth(value);
          }}
          style={{ width: 240 }}
        />
        <InputNumber
          addonBefore="Duvet length:"
          addonAfter="inches"
          value={duvetLength}
          onChange={(value) => {
            setDuvetLength(value);
          }}
          style={{ width: 240 }}
        />
        <Button
          onClick={() => {
            setDuvetLength(null);
            setDuvetWidth(null);
          }}
        >
          Clear
        </Button>
      </Layout>
      <Title level={2}>Sew</Title>
      <Text>
        <ol>
          <li>
            Make a wide hem on the bottom of the underside piece so that the
            distance from the top to the stitch line equals the length of the
            duvet - 1/2".
          </li>
          <li>
            Press the flap piece in half the long way, and one of the edges
            inwards 1/2".
          </li>
          <li>
            Pin the flap onto the top piece <b>right sides together</b> and
            stitch with a 1/2" seam allowance.
          </li>
          <li>
            Stitch the other side of the flap so that it sandwiches the seam
            allowance from the previous step. The seam you sew here will be
            topstiching on the flap fabric.
          </li>
          <li>
            Pin the top and underside pieces <b>wrong sides together</b>. Stick
            the ends of your ties or snap tape inside, with the edges that you
            want secure to the cover pinned to line up with the edge so that
            they are caught in your seam. Make sure you check your placement so
            they line up to where your duvet's attachment points are.
          </li>
          <li>
            Sew around the 3 sides (top and sides, leave the bottom alone for
            now) with a 1/4" seam or a serger
          </li>
          <li>
            Trim the seam allowance if not serged, then turn inside out. Press
            if you'd like. Right sides should be together now, with the ties
            sticking out.
          </li>
          <li>
            Stitch around the sides again, this time with a 1/2" seam allowance.
            For the bottom, go inwards on either side, leaving as much
            unstitched as you want the width of the opening to be. When
            stitching across the bottom, make your stitch line to right above
            the seams of the underside hem and top flap. Make sure to reinforce
            your start and end, since that will be the edges of your opening.
          </li>
          <li>
            Sew the flap and underside hem together on each side of the opening.
            Start at the point where you stopped in the previous step and go at
            a right angle down to the bottom
          </li>
          <li>
            <b>If using buttons:</b> Make buttonholes along the flap where it's
            exposed by the opening
          </li>
          <li>Turn right side out again.</li>
          <li>
            <b>If using buttons: </b>Sew the buttons corrresponding to the
            buttonholes along the underside hem.
          </li>
        </ol>
        <br />
      </Text>
    </Layout>
  );
};
