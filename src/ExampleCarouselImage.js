function ExampleCarouselImage({ text }) {
  return (
    <img
      src="https://placehold.co/800x400"
      alt={text}
      style={{ width: "100%", height: "400px", objectFit: "cover" }}
    />
  );
}

export default ExampleCarouselImage;