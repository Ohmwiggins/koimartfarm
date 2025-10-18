import { ContainedButton } from "./FilledButton.styles";

function FilledButton({ text, method }: { text: string; method: () => void }) {
  return (
    <ContainedButton variant="contained" onClick={() => method()}>
      {text}
    </ContainedButton>
  );
}

export default FilledButton;
