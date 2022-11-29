import React, { useState } from "react";

import { Page, Document, Text, StyleSheet, Image, View, Font } from "@react-pdf/renderer";

// import font from "../../../../public/styles/vazir_font2/Farsi-Digits/fonts/ttf/Vazirmatn-FD-Medium.ttf";
// const font = require()
// import * as font from "./Vazirmatn-FD-Medium.ttf"

const styles = StyleSheet.create({
    body:{
        backgroundColor : "#fff",
        border : "1px solid #000",
        padding : "14px",
        fontFamily: "Vazirmatn FD"
    },
    txt : {
        color: "red"
    },
    image : {
        width: "80px"
    },
    pageNumber : {
        color : "blue"
    },
    itemStyle : {
        border : "1px solid #a5a5a5",
        padding : "8px",
        marginBottom : "7px",
        display : "flex",
        flexDirection:"column",
        direction: "rtl",
        alignItems : "flex-end"
    },
    infoStyles : {
        fontSize : "12px",
        color: "#a5a5a5",
    },
    nameStyles : {
        fontSize : "14px",
    },
    serviceStyles : {
        color: "#000000b8",
        fontSize : "12px"
    },
    marginStyle : {
        marginRight : "8px"
    }

});

Font.register({
    family : "Vazirmatn FD",
    src : "http://localhost:4000/public/Vazirmatn-FD-Medium.ttf"
});

function EmployeeListPdf (props){

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);
  
    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    // }

    console.log(props);

    // document will store all pages fo pdf
    return (
        <Document size="A4">
            
            <Page style={styles.body}>
            {
                props.employeeList.map( (item, index) => {
                    const { nationalId,  reserves, services, person : { fName, lName, id, phone} } = item;
                    
                    return <View style={styles.itemStyle} key={index}>

                        <Text style={styles.nameStyles}>
                             {fName+" "+lName} .{index+1}
                        </Text>

                        <Text style={styles.infoStyles}>
                            {nationalId} :کدملی
                        </Text>

                        <Text style={styles.infoStyles}> 
                                {phone} :شماره موبایل 
                        </Text>

                        <Text style={styles.serviceStyles}>
                            <Text style={styles.marginStyle}>
                            {
                                services.map( (service, serviceIndex ) => (serviceIndex == services.length-1 ? "" : "،" )+ service.serviceTitle  )
                            }
                            </Text>
                            خدمات: 
                        </Text>
            

                    </View> 
                })
            }

                {/* <Text style={styles.txt}>

                </Text>

                <Image style={styles.image} src="/imgs/user.png"/>

                <Text fixed render={({pageNumber, totalPages}) => `${pageNumber} / ${totalPages}` } style={styles.pageNumber}></Text> */}
            
            </Page>

        </Document>
    )
}

export default EmployeeListPdf;