const inputObj = {
  text: "Shaku syntax is now supported on https://t.co/UpkmJ7yGKG! Give it a try to annotate your code ! kudos to @JSer_ZANP for making such a great tool !",
  entities: {
    urls: [
      {
        displayUrl: "BFE.dev", // url to display
        url: "https://t.co/UpkmJ7yGKG", // actual url to redirect
        indices: [
          33, // start index, inclusive
          56, // end index, exclusive
        ],
      },
    ],
    mentions: [
      {
        screeName: "JSer_ZANP", // display screen name
        indices: [
          105, // start index, inclusive
          115, // end index, exclusive
        ],
      },
    ],
  },
};

// function renderTextWithEntities(text, entities) {
//   const items = [
//     ...entities.urls.map((url) => ({
//       type: "url",
//       start: url.indices[0],
//       end: url.indices[1],
//       displayUrl: url.displayUrl,
//       url: url.url,
//     })),
//     ...entities.mentions.map((m) => ({
//       type: "mention",
//       start: m.indices[0],
//       end: m.indices[1],
//       screenName: m.screeName,
//     })),
//   ];

//   // modifies the original array
//   items.sort((a, b) => a.start - b.start);

//   let result = "";
//   let pointer = 0;

//   for (const item of items) {
//     // extract portion of text before item appears
//     result += text.slice(pointer, item.start);

//     // add anchor to the end of extracted text i.e result
//     if (item.type === "url") {
//       result += `<a href="${item.url}">${item.displayUrl}</a>`;
//     }

//     // add anchor to the end of extracted text i.e result
//     if (item.type === "mention") {
//       result += `<a href="https://x.com/${item.screenName}">@${item.screenName}</a>`;
//     }

//     pointer = item.end;
//   }

//   result += text.slice(pointer);

//   return result;
// }

function renderTextWithEntities(text, entities) {
  const map = new Map();

  for (const url of entities.urls) {
    map.set(url.indices[0], { type: "url", ...url });
  }

  for (const m of entities.mentions) {
    map.set(m.indices[0], { type: "mention", ...m });
  }
    const result = [];
    let i = 0;

    while (i < text.length) {
      if (map.has(i)) {
        const entity = map.get(i);

        if (entity.type === "url") {
          result.push(`<a href="${entity.url}">${entity.displayUrl}</a>`);
        } else {
          result.push(
            `<a href="https://x.com/${entity.screeName}">@${entity.screeName}</a>`
          );
        }

        i = entity.indices[1]; 
      } else {
        result.push(text[i]);
        i++;
      }
    }

    return result.join("");
}

const result = renderTextWithEntities(inputObj.text, inputObj.entities);
console.log("result===>", result);
