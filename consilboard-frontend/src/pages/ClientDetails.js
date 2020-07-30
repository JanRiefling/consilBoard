import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {fetchClient} from "../utils/client-utils";
import ClientCard from "../components/ClientCard/ClientCard";

function ClientDetails() {
    const { id } = useParams();

    const [client, setClient] = useState();
    useEffect(() => {
        fetchClient(id)
            .then((data) => setClient(data))
            .catch((e) => console.error(e));
    }, [id]);

    return <>{client && <ClientCard client={client} />}</>;
}

export default ClientDetails;