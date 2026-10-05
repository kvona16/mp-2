import styled from "styled-components";
import type { FbiProps } from "../type/FbiProps";

const FbiCard = styled.div`
    margin: 15px;
    max-width: 420px;
    padding: 15px;
    width: 420px;
    background-color: burlywood;
    color: #090909;
    border-radius: 8px;
    text-align: left;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 6px;
    margin-bottom: 10px;
`;

const WarningBadge = styled.span`
    display: inline-block;
    background-color: #ef4444;
    color: white;
    font-size: calc(1rem + .5vw);;
    font-weight: bold;
    padding: 4px 8px;
    border-radius: 4px;
    margin-bottom: 10px;
    font-family: Impact;
`;

export default function FbiPreview({ item }: { item: FbiProps }) {
    const imageUrl = item.images?.[0]?.thumb || item.images?.[0]?.large;

    return (
        <FbiCard>
            {imageUrl && <ProfileImage src={imageUrl} alt={item.title} />}

            {item.warning_message && (
                <WarningBadge>{item.warning_message}</WarningBadge>
            )}

            <h2>{item.title}</h2>
            {item.sex && <p><strong>Sex:</strong> {item.sex}</p>}
            {item.description && <p><strong>Details:</strong> {item.description}</p>}
        </FbiCard>
    );
}