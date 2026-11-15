function renderInline(text) {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\)|\*\*.+?\*\*)/g);

  return tokens.map((token, index) => {
    const link = token.match(/^\[(.+)\]\((.+)\)$/);
    if (link) {
      return (
        <a href={link[2]} key={index}>
          {renderInline(link[1])}
        </a>
      );
    }

    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={index}>{token.slice(2, -2)}</strong>;
    }

    return token;
  });
}

function renderMarkdown(markdown) {
  const lines = markdown.split("\n");
  const elements = [];

  for (let index = 0; index < lines.length; ) {
    const line = lines[index];

    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line === "---") {
      elements.push(<hr key={index} />);
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3}) (.+)$/);
    if (heading) {
      const Heading = `h${heading[1].length}`;
      elements.push(
        <Heading key={index}>{renderInline(heading[2])}</Heading>,
      );
      index += 1;
      continue;
    }

    if (line.startsWith("- ")) {
      const items = [];
      while (index < lines.length && lines[index].startsWith("- ")) {
        items.push(
          <li key={index}>{renderInline(lines[index].slice(2))}</li>,
        );
        index += 1;
      }
      elements.push(<ul key={`list-${index}`}>{items}</ul>);
      continue;
    }

    const paragraph = [];
    while (
      index < lines.length &&
      lines[index].trim() &&
      lines[index] !== "---" &&
      !/^#{1,3} /.test(lines[index]) &&
      !lines[index].startsWith("- ")
    ) {
      paragraph.push(lines[index]);
      index += 1;
    }
    elements.push(
      <p key={`paragraph-${index}`}>{renderInline(paragraph.join(" "))}</p>,
    );
  }

  return elements;
}

function LegalDocument({ markdown }) {
  return <article className="legal-content">{renderMarkdown(markdown)}</article>;
}

export default LegalDocument;
