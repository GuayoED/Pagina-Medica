import React from "react";

import { AddChannel } from '../assets/AddChannel'

const TeamChannelList = ({ children, error = false, loading, type }) => {
    if(error) {
        return type === 'team' ? (
            <div className="team-channel-list">
                <p className="team-channel-list__message"> 
                    Error de conexión, por favor espere un momento e intente de nuevo.
                </p>
            </div>

        ) : null
    }

    if(loading) {
        return (
            <div className="team-channel-list">
                <p className="team-channel-list__message loading"> 
                    Cargando {type === 'team' ? 'Canales' : 'Mensajes'}.... 
                </p>
            </div>
        )
    }


    return (
        <div className="team-channel-list">
            <div className="team-channel-list__header">
                <p className="team-channel-list__header__title">
                    {type === 'team' ? 'Canales' : 'Mensajes Directos'}
                </p>
            </div>
            {children}
        </div>
    )
}
// loading, eam-channel-list__header, team-channel-list__header__title falran de agregar

export default TeamChannelList