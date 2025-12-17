function WordColorEffect({ text, active }) {
  return (
    <h1 className="main-font text-4xl p-8 whitespace-pre-line">
      {text.split(" ").map((word, i) => (
        <span
          key={i}
          className={`inline-block mr-2 transition-colors duration-300
            ${active ? "text-black" : "text-gray-600"}`}
          style={{ transitionDelay: `${i * 90}ms` }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}
export default WordColorEffect;
