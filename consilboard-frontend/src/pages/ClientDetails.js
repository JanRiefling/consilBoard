import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchClient} from "../utils/client-utils";
import ClientSearchCard from "../components/ConsilBoardMenuBar/SearchClients/ClientSearchCard";

function ClientDetails() {
    const { id } = useParams();

    const [client, setClient] = useState();
    useEffect(() => {
        fetchClient(id)
            .then((data) => setClient(data))
            .catch((e) => console.error(e));
    }, [id]);

    return <>{client && <ClientSearchCard client={client} />}</>;
}

export default ClientDetails;