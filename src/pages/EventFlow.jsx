import React from "react";
import Header from "../components/contributions/Event-Flow/Header";
import Rules from "../components/contributions/Event-Flow/Rules";
import GlimpseComponent from "../components/contributions/Event-Flow/GlimpseComponent";
import EventFlowComponent from "../components/contributions/Event-Flow/EventFlowComponent";

export default function EventFlow() {
    return (
        <>
            <Header />
            <EventFlowComponent />   
            <Rules />  
            <GlimpseComponent />    
        </>
    );
}