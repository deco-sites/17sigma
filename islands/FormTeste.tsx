export default function FormTeste() {
  return (
    <>
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
        }}
      >
        <input type="text" placeholder={"Teste de texto"} />

        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
