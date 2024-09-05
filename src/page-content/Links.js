import * as React from "react";
import { Typography, Layout, InputNumber, Button, Radio } from "antd";
const { Title, Text } = Typography;

export const Links = () => {
  const dragonCaveIds = [
    "i9sTE",
    "xTQV1",
    "psKmf",
    "cnYum",
    "A4ZQa",
    "lFocy",
    "e9YMU",
    "KYwwa",
    "LvvLO",
    "x6IHs",
    "ScdDg",
    "zvQNo",
    "uQ5q1",
    "3U6qP",
    "FyZpd",
    "KzMT3",
    "UjEFi",
    "guw32",
    "3tYPO",
    "Ps2qR",
    "oJ9gI",
    "QXikY",
    "ItKe0",
    "arRK4",
    "BdB4J",
    "AZcrA",
  ];
  const chickenSmoothiePets = [
    "446455684",
    "448172026",
    "448172050",
    "446455624",
    "446456205",
    "448169779",
    "436725826",
  ];

  return (
    <Layout>
      <Title level={2}>Fav Resources</Title>
      <Title level={4}>Machine Knitting</Title>
      <Text>
        <li>
          <a href="https://www.abstractknitfactoryfactory.com/">
            Machine knitting calculators
          </a>
          : various sweaters and other things
        </li>
        <li>
          <a href="https://brendaabell.com/knittingtools/pcgenerator/">
            Punchcard generator
          </a>
          : tool that generates punchcard svgs for different knitting machine
          formats
        </li>
        <li>
          <a href="http://knitting.bikibird.com/jacquardform.html">
            Jaquard punchard converter
          </a>
          : convert a punchard design to different colorwork techniques
        </li>
        <li>
          <a href="http://punchcards.ru/">Russian punchcards</a>: a whole bunch
          of machine knitting punchards
        </li>
      </Text>
      <Title level={4}>Music</Title>
      <Text>
        <li>
          <a href="https://thesession.org/">Ultimate fiddle music resource</a>:
          almost any tune you'd want. Generates sheet music or ABC format
        </li>
        <li>
          <a href="https://www.vgleadsheets.com/">Video game music</a>: sheet
          music, can generate for different instruments
        </li>
      </Text>
      <Title level={4}>Software Dev etc</Title>
      <Text>
        <li>
          <a href="https://uicolors.app/create">Color scheme generator</a>: I
          like how it shows how it will look on UI elements
        </li>
        <li>
          <a href="https://sankeymatic.com/build/">Sankey diagram maker</a>: a
          fun diagram type
        </li>
        <li>
          <a href="https://sequencediagram.org/">Sequence diagram maker</a>:
          great for illustrating code architecture
        </li>
        <li>
          <a href="https://www.toptal.com/developers/keycode">Keycode info</a>:
          press a key and it'll show you all the event info for it
        </li>
        <li>
          <a href="https://regexr.com/">Regex building</a>: build, debug regular
          expressions. Has built in reference.
        </li>
        <li>
          <a href="https://regexcrossword.com/">Gamify learning regex</a>: fun!
        </li>
      </Text>
      <Title level={2}>Nostalgia</Title>
      <Text>
        I miss old virtual pet sites and the dumps of fun images and pixel art
        so here's some of mine
      </Text>
      <br />
      <div>
        {dragonCaveIds.map((dragonId) => (
          <a
            href={`https://dragcave.net/view/${dragonId}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://dragcave.net/image/${dragonId}.gif`}
              style={{ borderWidth: 0, paddingRight: 6 }}
              alt="Adopt one today!"
            />
          </a>
        ))}
      </div>
      <div>
        {chickenSmoothiePets.map((petId) => (
          <a
            href={`https://www.chickensmoothie.com/pet/${petId}.html`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`https://www.chickensmoothie.com/pet/${petId}&trans=1.jpg`}
              alt="virtual pet"
            />
          </a>
        ))}
      </div>
    </Layout>
  );
};
