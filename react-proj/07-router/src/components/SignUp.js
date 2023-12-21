import { useForm } from "react-hook-form"

export default function SignUp() {
  const { register, handleSubmit, formState: { errors },watch } = useForm()

  const onVaild = (data) => {
    console.log("성공", data)
  }
  const onInVaild = (err) => {
    console.log("실패", err)
  }

  // const genderRegister = register("gender", { required: `성별은 필수값입니다.` })
  // console.log(watch("ID"))

  return (
    <>
      {/* <h4>React Hook Form 테스트</h4>
      <form onSubmit={handleSubmit(onVaild, onInVaild)}>
        <input type="text" placeholder="아이디" value="kihet"
          {...register("ID",
            {
              required: "아이디는 필수값입니다."
            })} />

        {errors.ID?.message}
        <hr />
        <input type="text" placeholder="이름"  value="kiseon"
          {...register("username",
            {
              required: "이름 필수값입니다.",
              minLength: {
                value: 2,
                message: "이름은 2글자 이상 입력해야합니다."
              }
            })} />
        {errors.username?.message}
        <hr />
        <input type="text" placeholder="이메일" value="kiseon@gmail.com"
          {...register("email",
            {
              required: "이메일 필수값입니다.",
              // pattern: /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$$/ ,
              // pattern: {
              //   value:/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
              //   message:"올바른 형태의 이메일을 입력해주세요."
              // }
              validate: (v) => v.includes("gmail.com") || "gmail로만 가입 가능합니다."
            })} />
        {errors.email?.message}
        <hr />
        <label htmlFor="gender-men">
          <input type="radio" id="gender-men" value="남" {...genderRegister} /> 남
        </label>
        <label htmlFor="gender-women">
          <input type="radio" id="gender-women" value="여" {...genderRegister} /> 여
        </label>
        {errors.gender?.message} 
        <hr />
        <select {...register("option", {required:"옵션은 필수값입니다."})}>
          <option value="option1">옵션1</option>
          <option value="option2">옵션2</option>
          <option value="option3">옵션3</option>
          <option value="option4">옵션4</option>
        </select>
        {errors.option?.message} 

        <br/><br/>
        <button type="submit">제출</button>
      </form> */}
      <hr />  <hr />
      <form onSubmit={handleSubmit(onVaild, onInVaild)}>
        <p>실습</p>
        <input type="text" placeholder="이름" {...register("name", {required:"이름은 필수항목입니다."})} /> {"  "}
        {errors.name?.message}
        <input type="number" placeholder="나이" {...register("age", {min:{value:0, message:"0이상의 숫자만 입력가능합니다."}})} />
        {errors.age?.message}
        <button type="submit"> 제출!! </button>
      </form>
    </>
  )
}