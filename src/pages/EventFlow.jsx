import React from "react";
import Header from "../components/contributions/Event-Flow/Header";
import Rules from "../components/contributions/Event-Flow/Rules";
import GlimpseComponent from "../components/contributions/Event-Flow/GlimpseComponent";
import EventFlowComponent from "../components/contributions/Event-Flow/EventFlowComponent";
import WaveComponent from "../components/contributions/Event-Flow/WaveComponent";

export default function EventFlow() {
    return (
        <>
            <Header />
            <WaveComponent />
            <EventFlowComponent />   
            <GlimpseComponent />
            <Rules />      
        </>
    );
}