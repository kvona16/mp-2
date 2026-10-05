import { useEffect, useState } from "react";
import type { FbiProps } from "../type/FbiProps";
import FbiPreview from "./FbiPreview";
import styled from "styled-components";

const CardGrid = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: center;
    gap: 20px;
    padding: 20px;
    
    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`;

export default function FbiListContent() {
    const [pageSize, setPageSize] = useState(10);
    const [items, setItems] = useState<FbiProps[]>([]);

    useEffect(() => {
        async function fetchData() {
            const res = await fetch(`https://api.fbi.gov/wanted/v1/list?pageSize=${pageSize}`);
            const jsonRes = await res.json();
            setItems(jsonRes.items);
        }

        fetchData()
            .then(() => console.log("okay"))
            .catch((e) => console.log("This -> " + e));
    }, [pageSize]);

    return (
        <>
            <label>Number of Results: </label>
            <input
                type="number"
                min="1"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
            />
            <p>Displaying: {pageSize} records</p>
            <CardGrid>
                {items.map((item) => (
                    // Uses 'uid' instead of 'id'
                    <FbiPreview key={item.uid} item={item} />
                ))}
            </CardGrid>
        </>
    );
}