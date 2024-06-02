import { Button, H1, Input, WrapperFormGroup } from "../styled"

function FormGroup({ username, handleChange, handleClick }) {

    return (
        <>
            <H1>Github Api Project</H1>
            <WrapperFormGroup>
                <Input type='text' placeholder='Enter username...' value={username} onChange={handleChange}></Input>
                <Button onClick={handleClick}>Show Informations</Button>
            </WrapperFormGroup>
        </>
    )
}

export default FormGroup