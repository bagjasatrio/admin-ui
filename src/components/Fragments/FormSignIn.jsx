import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/Labeledinput";

const FormSignIn = () => {
  return (
    <div className="mt-16">
        <form action="">
          <div className="mb-6">
            <LabeledInput/>
          </div>
          <div className="mb-3">
            <CheckBox/>
          </div>
            <Button/>
        </form>
      </div>
  )
}

export default FormSignIn;
