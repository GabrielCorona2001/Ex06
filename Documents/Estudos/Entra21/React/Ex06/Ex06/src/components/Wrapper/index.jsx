import { WrapperContainer } from "./styles.js"



export function Wrapper({ children }) {


    return (

            <WrapperContainer>
                {children}
            </WrapperContainer>
    )
}