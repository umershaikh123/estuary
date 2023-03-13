import React from "react";
import { Box, Container, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";
const HomeHero = () => {
  const codeString = "(num) => num + 1";

  const Code = [
    {
      type: "curl",
      code: `curl -L -X POST 'https://api.estuary.tech/content/add' -H 'Accept: application/json' -H 'Authorization: Bearer YOUR_API_KEY' -F 'data=@"/path/to/file"'`,
    },
    {
      type: "node",
      code: `const https = require("https");
        const fs = require("fs");
        const FormData = require("form-data");
        const fetch = require("node-fetch");
        
        const key = "YOUR_API_KEY";
        
        var form = new FormData();
        const path = \`\${__dirname}/YOUR_FILE_ON_YOUR_COMPUTER.mp4\`;
        form.append("data", fs.createReadStream(path));
        
        const headers = form.getHeaders();
        console.log(headers);
        
        fetch("https://upload.estuary.tech/content/add", {
          method: "POST",
          body: form,
          headers: {
            Authorization: \`Bearer \${key}\`,
            ...headers,
          },
        })
          .then(function(res) {
            return res.json();
          })
          .then(function(json) {
            console.log(json);
          });`,
    },
    {
      type: "browser",
      code: `const formData = new FormData();

      const { data } = THE_SOURCE_OF_YOUR_FILE_FROM_INPUT;
      
      formData.append('data', data, data.filename);
      
      let xhr = new XMLHttpRequest();
      
      let targetURL = "https://upload.estuary.tech/content/add";
      
      xhr.open('POST', targetURL);
      xhr.setRequestHeader('Authorization', \`Bearer \${YOUR_API_KEY}\`);
      xhr.send(formData);`,
    },
    {
      type: "curl",
      code: `curl -L -X POST 'https://api.estuary.tech/content/add' -H 'Accept: application/json' -H 'Authorization: Bearer YOUR_API_KEY' -F 'data=@"/path/to/file"'`,
    },
  ];
  return (
    <>
      <Box
        sx={{
          //   border: "2px solid red",
          height: "100vh",

          position: "relative",
        }}
      >
        <Container
          maxWidth="lg"
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
            mt: 15,
          }}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={5}
            sx={{ maxWidth: "50%" }}
          >
            <h2 className="text-4xl text-white items-center font-bold leading-snug">
              A reliable way to upload public data onto Filecoin and pin it to
              IPFS
            </h2>

            <p className="text-xl text-white items-center opacity-95 leading-loose">
              Store your public data and guarantee that it is available to
              everyone around the world. Our technology will restore lost data
              and guarantee data replication
            </p>

            <Stack
              direction="row"
              justifyContent="between"
              alignItems="center"
              spacing={6}
            >
              <div className="text-md border-2 border-neon text-emerald px-6 py-2   hover:scale-105 transition ease-in duration-150">
                Get Api Key
              </div>

              <div className="text-md border-2 border-neon text-emerald px-6 py-2   hover:scale-105 transition ease-in duration-150">
                View Docs
              </div>
            </Stack>
          </Stack>

          <div className="flex flex-row justify-between items-center w-96 mt-10">
            <SyntaxHighlighter
              language="javascript"
              style={arta}
              wrapLines="true"
            >
              {Code[0].code}
            </SyntaxHighlighter>
          </div>
        </Container>
      </Box>
    </>
  );
};

export default HomeHero;
