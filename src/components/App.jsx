export const App = () => {
  return (
    <div>
      <Section title="">
        <FeedbackOptions options={['good', 'neutral', 'bad']} ></FeedbackOptions>
        <Statistics></Statistics>
      </Section>
    </div>
  );
};
