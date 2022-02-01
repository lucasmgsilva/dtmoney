import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    div {
        flex: 1;
        margin-top: -10rem;
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);
        
        & + div {
            margin-left: 2rem;
        }

        header {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong {
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }

        &:last-child {
            background: var(--green);
            color: #FFF;
        }
    }
`