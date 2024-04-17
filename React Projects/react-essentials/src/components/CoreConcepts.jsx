import { CORE_CONCEPTS } from "../data";
import CoreComponents from "./CoreComponents.jsx";
import Section from "./Section.jsx";

export default function CoreConcepts() {
  return (
    <Section id="core-concepts" title="Core Concepts">
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreComponents
            key={conceptItem.title}
            {...conceptItem}
            // title={conceptItem.title}
            // description={conceptItem.description}
            // image={conceptItem.image}
          />
        ))}
      </ul>
    </Section>
  );
}
