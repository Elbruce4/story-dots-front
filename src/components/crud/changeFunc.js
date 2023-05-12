
export const changeInput = (e , state , setState) => {
    console.log("entra");
    setState({
        ...state,
        [e.target.name] : e.target.value
    })
    console.log(state);
}