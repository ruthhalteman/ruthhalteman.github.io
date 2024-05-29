import * as React from "react";
import { useState } from "react";
import {
  Typography,
  Layout,
  InputNumber,
  Image,
  Row,
  Col,
} from "antd";
const { Title, Text } = Typography;

const getYardage = (strips, width) => {
  const yardage = (strips * width) / 36;
  return yardage < 0.25
    ? `${strips * width}" long`
    : `${yardage.toString().slice(0, 4)} yard${yardage > 1 ? "s" : ""}`;
};

export const BeeBlock = () => {
  const [widthBlocks, setWidthBlocks] = useState(null);
  const [heightBlocks, setHeightBlocks] = useState(null);

  const numWhiteStrips = Math.ceil((widthBlocks * heightBlocks) / 3);
  const whiteYardageAmount = getYardage(numWhiteStrips, 2);

  const numLightStrips = Math.ceil((widthBlocks * heightBlocks) / 9);
  const numMediumStrips = Math.ceil((widthBlocks * heightBlocks) / 5);
  const numDarkStrips = Math.ceil((widthBlocks * heightBlocks) / 4);

  return (
    <Layout>
      <Title>Diagonal Strings Quilt</Title>
      <Text>
        An easy block that's great for using up scraps, espcially jelly rolls
        and leftover binding strips. Originally written for the stashbee
        quilting bee blog:{" "}
        <a
          href="https://stashbee.blogspot.com/2023/09/hive-3-september-bright-diagonal.html"
          target="_blank"
          rel="noreferrer"
        >
          Link to post
        </a>
      </Text>
      <Title level={2}>Cutting</Title>
      <Text>
        <b>Colors:</b> Various shades of two contrasting colors, plus a white or
        similar. For my example I'm using orange/yellow and teal.
      </Text>
      <br />
      <Text>
        Calculator for the entire quilt{" "}
        <a
          onClick={() => {
            window.scrollTo(0, document.body.scrollHeight);
          }}
        >
          at the bottom of the page
        </a>
        .
      </Text>
      <br />
      <Row>
        <Col span={12}>
          <Text style={{ minWidth: 200 }}>
            Each 8" block will take:
            <ul>
              <li>11.5" x 2" - white</li>
              <li>10.5" x 2" - 1 orange, 1 teal</li>
              <li>7.5" x 2" - 1 orange, 1 teal</li>
              <li>4.5" x 2.5" - 1 orange, 1 teal</li>
            </ul>
          </Text>
        </Col>
        <Col span={12}>
          <Image src="/cut-pieces.jpg" alt="cut pieces" width={160} />
        </Col>
      </Row>
      <br />
      <img src="/string-block.png" alt="diagram of pieces to cut" />

      <br />
      <Text>
        The most important length is the white, that will be the reference point
        for trimming. Other lengths don't have to be precise, but the numbers I
        give are the minimum and will give you a little error margin for
        trimming security.
      </Text>
      <br />
      <Text>
        I have been using the darker fabrics for the longer strips for some nice
        contrast, but you can mix it up however you like.
      </Text>
      <Title level={2}>Sewing</Title>
      <Text>
        Start with your white strip. Fold in half along the long edge, pinch the
        fold to get a reference mark in the center. Do the same for the next
        strip: one of the 10.5" ones. Line up the center marks and sew together
        with a normal 1/4" seam. Continue in this same way with the
        corresponding color strips (7.5", then 4.5"). Then do the same thing for
        the other side of the white strip with the other color.
      </Text>
      <Title level={2}>Pressing</Title>
      <Text>You can just press the seams open.</Text>
      <br />
      <Image src="/pressing.jpg" alt="assembled pieces pressed" width={300} />
      <Title level={2}>Trimming</Title>
      <Row gutter={20}>
        <Col span={12}>
          <Image src="/trimming-1.jpg" alt="lining up the ruler" />
        </Col>
        <Col span={12}>
          Line a ruler up diagonally with the corner against the center of the
          edge of the white stripe. Make sure it's aligned with the stripe using
          the 45 degree line and where the lines cross on your ruler markings.
        </Col>
      </Row>
      <br />
      <Row gutter={20}>
        <Col span={12}>
          <Image src="/trimming-2.jpg" alt="trimmed corner" />
        </Col>
        <Col span={12}>
          Trim the corner. If you have an 8" square ruler it'll be pretty
          trivial from here, if not, we're basically doing the exact same method
          as how you'd square up and trim a finished quilt.
        </Col>
      </Row>
      <br />
      <Text>
        After trimming both white corners like that, you can just line your
        ruler up with the previous cuts to complete the other two corners. The
        final square ends up as 8"
      </Text>
      <br />
      <Row gutter={20}>
        <Col span={12}>
          <Image src="/trimming-3.jpg" alt="lining up to trim other corner" />
        </Col>
        <Col span={12}>
          <Image src="/trimming-4.jpg" alt="finished block" />
        </Col>
      </Row>

      <Title level={2}>Finish Quilt!</Title>
      <Text>
        Lay out blocks as desired, then assemble and finish as you would any
        other quilt.{" "}
      </Text>
      <br />
      <Row gutter={20}>
        <Col span={12}>
          <Image src="/layout.jpg" alt="trimmed corner" />
        </Col>
        <Col span={12}>
          <Text id="quilt-math">Finished Quilt size math for you</Text> <br />
          <br />
          <InputNumber
            addonBefore="Number of blocks wide:"
            value={widthBlocks}
            onChange={(value) => {
              setWidthBlocks(value);
            }}
            style={{ width: 240 }}
            min={1}
          />
          <br />
          <br />
          <InputNumber
            addonBefore="Number of blocks tall:"
            value={heightBlocks}
            onChange={(value) => {
              setHeightBlocks(value);
            }}
            style={{ width: 240 }}
            min={1}
          />
          <br />
          <br />
          {widthBlocks && heightBlocks && (
            <Text>
              <b>Result: </b>
              {`${widthBlocks * 7.5}" x ${heightBlocks * 7.5}" finished quilt`}
              <br />
              <br />
              <b>White</b>
              <br />
              Cut from yardage: {whiteYardageAmount} total
              <br />
              or
              <br />
              Jelly Roll strips or equivalent: {numWhiteStrips}
              <br />
              <br />
              <b>Orange and Teal each</b>
              <br />
              Light: {numLightStrips} strip{numLightStrips > 1 ? "s" : ""}
              <br />
              Medium: {numMediumStrips} strip{numMediumStrips > 1 ? "s" : ""}
              <br />
              Dark: {numDarkStrips} strip{numDarkStrips > 1 ? "s" : ""}
              <br />
              <br />
              Or just use scraps!
            </Text>
          )}
        </Col>
      </Row>
      <br />
      <br />
    </Layout>
  );
};
