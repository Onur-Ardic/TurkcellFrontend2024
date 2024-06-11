import { Input, CustomForm, Button } from "../styled";
const Form = ({ setUser, fetchData, input }) => {
  return (
    <CustomForm
      onSubmit={(e) => {
        e.preventDefault();
        fetchData();
      }}
    >
      <Input
        required
        type="text"
        onChange={(e) => {
          setUser(e.target.value);
        }}
        placeholder="Kullanıcı adı giriniz"
        ref={input}
      />
      <Button bgcolor="d4adfc" color="000">
        Search
      </Button>
    </CustomForm>
  );
};

export default Form;
