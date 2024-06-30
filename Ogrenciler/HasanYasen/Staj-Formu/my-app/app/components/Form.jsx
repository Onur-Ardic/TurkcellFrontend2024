import { useFormik } from "formik";
import { basicSchema } from "../schemas";

const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);

    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    actions.resetForm();
};

const Form = () => {
    const formik = useFormik({
            initialValues: {
                name: "",
                surname: "",
                age: "",
                school: "",
                city: "",
                internship_day: "",
                // internship_type: "",
            },
            validationSchema: basicSchema,
            onSubmit,
        });
    // console.log(formik);

    return (
        <form onSubmit={formik.handleSubmit} style={{ display: "flex", flexDirection: "column", width: "20%" }}>
            <input onChange={formik.handleChange} type="text" value={formik.values.name} placeholder="Name"></input>
            {/* {errors.name && (<p>{errors.name}</p>)} */}

            <input onChange={formik.handleChange} type="text" values={formik.values.surname} placeholder="Surname"></input>
            {/* {errors.surname && (<p>{errors.surname}</p>)} */}

            <input onChange={formik.handleChange} type="number" values={formik.values.age} placeholder="Age"></input>

            <input onChange={formik.handleChange} type="text" values={formik.values.school} placeholder="School"></input>

            <input onChange={formik.handleChange} type="text" values={formik.values.city} placeholder="City"></input>

            <input onChange={formik.handleChange} type="number" values={formik.values.internship_day} placeholder="Internship day"></input>

            {/* <label for="internshipType">Choose internship type:</label>
            <select onChange={handleChange} name="internshipType" id="internshipType">
                <option value="compulsory">Compulsory</option>
                <option value="voluntery">Voluntery</option>
            </select> */}

            <button disabled={isSubmitting} type="submit">Save</button>
        </form>
    )
}

export default Form