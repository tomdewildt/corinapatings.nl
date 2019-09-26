/* eslint-disable react/jsx-props-no-spreading */
import React, { useState, useLayoutEffect } from "react";
import { StyleSheetManager } from "styled-components";

import Layout from "../../layouts";

const Injector = ( { children } ) => {
    const [ iframeRef, setIframeRef ] = useState( null );

    useLayoutEffect( () => {
        const iframe = document.querySelector( "#nc-root iframe" );
        const iframeHead = iframe.contentDocument.head;
        setIframeRef( iframeHead );
    } );

    return iframeRef && (
        <StyleSheetManager target={ iframeRef }>{ children }</StyleSheetManager>
    );
};

export default ( Component ) => ( props ) => (
    <Injector>
        <Layout>
            <Component { ...props } />
        </Layout>
    </Injector>
);
