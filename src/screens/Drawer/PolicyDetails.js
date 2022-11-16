import React, { useContext, useEffect, useState } from "react";
import {ScrollView, Text, View, SafeAreaView, Image, } from "react-native";
import styled from "styled-components";

import colors from "../../constants/colors";

import {
	Collapse,
	CollapseHeader,
	CollapseBody,
  } from "accordion-collapse-react-native";
import { icons } from "../../utills/Icons";

const PolicyDetails = () => {

    const [press1, setPress1] = useState("-180deg");
	const [press2, setPress2] = useState("-180deg");
	const [press3, setPress3] = useState("-180deg");
	const [press4, setPress4] = useState("-180deg");
	const [press5, setPress5] = useState("-180deg");
	const [press6, setPress6] = useState("-180deg");
	const [press7, setPress7] = useState("-180deg");

    return (
        <SafeAreaView  style={{flex: 1, backgroundColor: colors.PRIMARY_COLOR}} >
            <ScrollView>
                <View style={{
                    padding:15
                }}>

                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress1(press1 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                fontSize: 17,
                            }}
                            >
                            General
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press1 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            To avail certain services on the portal, Users would be required to provide certain information for the registration process namely

                            {'\n'}{'\n'}1. Password

                            {'\n'}2. Username

                            {'\n'}3. Email address

                            {'\n'}{'\n'}In the course of providing you with access to the Services, and to provide you access to the features offered through the Portal and verifying your identity, you may be required to furnish additional information, including your Permanent Account Number. Except for any financial information that you choose to "provide while making payment for any Services on the Portal, Klutchh does not collect any other SPI in the course of providing the Services. Any SPI collected by Klutchh shall not be disclosed to any third party without your express consent, save as otherwise set out in this Privacy Policy or as provided in a separate written agreement between Klutchh and you or as required by law. It is clarified that this condition shall not apply to publicly available information, including SPI, concerning you on the Portal. In the course of providing the Services, Users may invite other existing Users or other users ("Invited Users") to participate in any of the Services by providing the email address or Facebook username of such users. Klutchh may thereafter use this information to contact the Invited User and invite such user to register with Klutchh (if such invited User is not an existing User) and participate in the Game with which such person was invited by the User. The participation of the Invited User in any of the games shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Portal. The User hereby represents that the Invited Users have consented and agreed to such disclosure to and use of their email address by Klutchh.

                        </Text>
                        </CollapseBody>
                    </Collapse>
                    
                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress2(press2 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Disclosure/Sharing
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press2 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            Klutchh may also share information as provided by you and data concerning usage of the Services and participation in the Games with third-party service providers engaged by Klutchh, for data analytics or other similar purposes, for storage, improving the services, and helping Klutchh serve you better. Where we propose to use your personal information (that is, information that may be used to identify the User and that is not otherwise publicly available) for any other uses we will ensure that we notify you first. You will also, be allowed to withhold or withdraw your consent for your use other than as listed above. By using the Portal, you hereby expressly agree and grant consent to the collection, use, and storage of this information by Klutchh. Klutchh reserves the right to share, disclose and transfer information collected hereunder with its affiliates. In the event, Klutchh sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed, or transferred as part of the transaction. You hereby expressly grant consent and permission to Klutchh for disclosure and transfer of information to such third parties. Klutchh may share information as provided by you and data concerning usage of the Services and participation in the Game with its commercial partners to facilitate user engagement, for marketing and promotional purposes, and other related purposes. Further, Klutchh reserves the right to disclose personal information as obligated by law, in response to duly authorized legal process, governmental requests, and as necessary to protect the rights and interests of Klutchh.

                        </Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress3(press3 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                fontSize: 17,
                            }}
                            >
                            Security Procedures
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press3 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            All information gathered on Klutchh is securely stored within Klutchh- controlled database. The database is stored on servers secured behind a firewall: access to such servers is password-protected and strictly limited based on a need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that information you supply will not be intercepted while being transmitted to usover the internet. Further, any information you include in a posting to the discussion areas will be available to anyone with Internet access. By using the Portal, you understand and agree that your information may be used in or transferred to countries other than India. Klutchh also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it, and under what circumstances we disclose it.

                        </Text>
                        </CollapseBody>
                    </Collapse>
                    
                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress4(press4 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Advertising
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press4 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            When Klutchh presents information to its online advertisers - to help them understand our audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated statistics on traffic to various pages within our site. When you register with Klutchh, we contact you from time to time about updating your content to provide features that we believe may benefit you. Several deceptive emails, websites, blogs, etc. claiming to be from or associated with Klutchh may or are circulating on the Internet. These emails, websites, blogs, etc. often include our logo, photos, links, content, or other information. Some emails, websites, blogs, etc. call the user to provide login name, password, etc., or that the user has won a prize/ gift or provide a method to commit illegal/ unauthorized acts or deeds or request detailed personal information or a payment of some kind. The sources and contents of these emails, websites, blogs, etc, and accompanying materials are in no way associated with Klutchh. For your protection, we strongly recommend not responding to emails or using websites, blogs, etc. We may use the information provided by you to Klutchh, including your email address or phone number, to contact you about the services availed by you or to inform you of our updated Services if any.

                        </Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress5(press5 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                fontSize: 17,
                            }}
                            >
                            Conditions of Use
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press5 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            Klutchh does not warrant that this portal, its servers or email sent by us or on our behalf are virus-free. Klutchh will not be liable for any damages of any kind arising from the use of this portal, including, but not limited to compensatory, direct, indirect, incidental, punitive, special, and consequential damages, loss of data, goodwill, business opportunity, income or profit, loss of or damage to property and claims of third parties. In no event will Klutchh be liable for any damages whatsoever over an amount of 100.

                        </Text>
                        </CollapseBody>
                    </Collapse>
                    
                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress6(press6 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                width: '80%',
                                fontSize: 17,
                            }}
                            >
                            Retention of Data
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press6 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            Your personal information may be retained and may continue to be used until (i) the relevant purposes for the use of your information described in this Privacy Policy is no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations, or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or defense of any legal claim.

                        </Text>
                        </CollapseBody>
                    </Collapse>

                    <Collapse
                        style={{
                        marginLeft: 10,
                        marginRight: 10,
                        borderWidth: 1,
                        marginVertical: 10,
                        padding: 4,
                        borderRadius: 10,
                        backgroundColor: '#211134',
                        borderColor: "#ffffff30",
                        }}
                        onToggle={() =>
                        setPress7(press7 == "-180deg" ? "-90deg" : "-180deg")
                        }
                    >
                        <CollapseHeader>
                        <View
                            style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                            justifyContent: "space-between",
                            }}
                        >
                            <Text
                            style={{
                                color: colors.WHITE,
                                padding: 10,
                                fontWeight: "bold",
                                marginBottom: 3,
                                fontSize: 17,
                            }}
                            >
                            Updating Information
                            </Text>
                            <Image
                            source={icons.down_arrow}
                            style={{
                                marginRight: 10,
                                
                                height: 34,
                                width: 34,
                                transform: [{ rotate: press7 }],
                            }}
                            />
                        </View>
                        </CollapseHeader>
                        <CollapseBody
                        style={{
                            padding: 8,
                        }}
                        >
                        <Text
                            style={{
                            color: colors.WHITE,
                            lineHeight: 20
                            }}
                        >
                            You will promptly notify Klutchh if there are any changes, updates, or modifications to your information. Further, you may also review, update or modify your information and user preferences by logging into your Profile page on the Portal.
                        </Text>
                        </CollapseBody>
                    </Collapse>
                    

                </View>
                {/* <View style={{
                    backgroundColor:"black",
                    padding:15
                }}>
                    <TextWhiteHeading>
                        Privacy Policies
                    </TextWhiteHeading>
                    <TextWhite>
                        To avail certain services on the portal, Users would be required to provide certain information for the registration process namely
                    </TextWhite>

                        <TextWhite>
                        1. Password
                        </TextWhite>
                <TextWhite>
                        2. Username
            </TextWhite>
        <TextWhite>
                        3. Email address
                        </TextWhite>
                        <TextWhite>
                            In the course of providing you with access to the Services, and to provide you access to the features offered through the Portal and verifying your identity, you may be required to furnish additional information, including your Permanent Account Number. Except for any financial information that you choose to "provide while making payment for any Services on the Portal, Klutchh does not collect any other SPI in the course of providing the Services. Any SPI collected by Klutchh shall not be disclosed to any third party without your express consent, save as otherwise set out in this Privacy Policy or as provided in a separate written agreement between Klutchh and you or as required by law. It is clarified that this condition shall not apply to publicly available information, including SPI, concerning you on the Portal. In the course of providing the Services, Users may invite other existing Users or other users ("Invited Users") to participate in any of the Services by providing the email address or Facebook username of such users. Klutchh may thereafter use this information to contact the Invited User and invite such user to register with Klutchh (if such invited User is not an existing User) and participate in the Game with which such person was invited by the User. The participation of the Invited User in any of the games shall be subject to the terms of this Privacy Policy and the Terms and Conditions for the use of the Portal. The User hereby represents that the Invited Users have consented and agreed to such disclosure to and use of their email address by Klutchh.
                        </TextWhite>

                        <TextWhiteHeading>
                            Disclosure/Sharing:
                        </TextWhiteHeading>

                        <TextWhite>
                            Klutchh may also share information as provided by you and data concerning usage of the Services and participation in the Games with third-party service providers engaged by Klutchh, for data analytics or other similar purposes, for storage, improving the services, and helping Klutchh serve you better. Where we propose to use your personal information (that is, information that may be used to identify the User and that is not otherwise publicly available) for any other uses we will ensure that we notify you first. You will also, be allowed to withhold or withdraw your consent for your use other than as listed above. By using the Portal, you hereby expressly agree and grant consent to the collection, use, and storage of this information by Klutchh. Klutchh reserves the right to share, disclose and transfer information collected hereunder with its affiliates. In the event, Klutchh sells or transfers all or a portion of its business assets, consumer information may be one of the business assets that are shared, disclosed, or transferred as part of the transaction. You hereby expressly grant consent and permission to Klutchh for disclosure and transfer of information to such third parties. Klutchh may share information as provided by you and data concerning usage of the Services and participation in the Game with its commercial partners to facilitate user engagement, for marketing and promotional purposes, and other related purposes. Further, Klutchh reserves the right to disclose personal information as obligated by law, in response to duly authorized legal process, governmental requests, and as necessary to protect the rights and interests of Klutchh.
                        </TextWhite>

                        <TextWhiteHeading>
                            Security Procedures:
                        </TextWhiteHeading>

                        <TextWhite>	All information gathered on Klutchh is securely stored within Klutchh- controlled database. The database is stored on servers secured behind a firewall: access to such servers is password-protected and strictly limited based on a need-to-know basis. However, we understand that as effective as our security measures are, no security system is impenetrable. Thus, we cannot guarantee the security of our database, nor can we guarantee that

                            information you supply will not be intercepted while being transmitted to us

                            over the internet. Further, any information you include in a posting to the

                            discussion areas will be available to anyone with Internet access. By using the

                            Portal, you understand and agree that your information may be used in or

                            transferred to countries other than India. Klutchh also believes that the internet is an ever-evolving medium. We may periodically review from time to time and change our privacy policy to incorporate such future changes as may be considered appropriate, without any notice to you. Our use of any information we gather will always be consistent with the policy under which the information was collected, regardless of what the new policy may be. Any changes to our privacy policy will be posted on this page, so you are always aware of what information we collect, how we use it, how we store it, and under what circumstances we

                            disclose it.</TextWhite>

                    <TextWhiteHeading>
                        Advertising:
                    </TextWhiteHeading>

                        <TextWhite>
                            When Klutchh presents information to its online advertisers - to help them understand our audience and confirm the value of advertising on the Portal - it is usually in the form of aggregated statistics on traffic to various pages within our site. When you register with Klutchh, we contact you from time to time about updating your content to provide features that we believe may benefit you. Several deceptive emails, websites, blogs, etc. claiming to be from or associated with Klutchh may or are circulating on the Internet. These emails, websites, blogs, etc. often include our logo, photos, links, content, or other information. Some emails, websites, blogs, etc. call the user to provide login name, password, etc., or that the user has won a prize/ gift or provide a method to commit illegal/ unauthorized acts or deeds or request detailed personal information or a payment of some kind. The sources and contents of these emails, websites, blogs, etc, and accompanying materials are in no way

                            associated with Klutchh. For your protection, we strongly recommend not responding to emails or using websites, blogs, etc. We may use the information provided by you to Klutchh, including your email address or phone number, to contact you about the services availed by you or to inform you of our updated Services if any.

                            **Conditions of Use:**

                            Klutchh DOES NOT WARRANT THAT THIS PORTAL, IT'S SERVERS OR EMAIL SENT BY US OR ON OUR BEHALF ARE VIRUS-FREE. Klutchh WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND ARISING FROM THE USE OF THIS PORTAL, INCLUDING, BUT NOT LIMITED TO COMPENSATORY, DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL, AND CONSEQUENTIAL DAMAGES, LOSS OF DATA, GOODWILL, BUSINESS OPPORTUNITY, INCOME OR PROFIT, LOSS OF OR DAMAGE TO PROPERTY AND CLAIMS OF THIRD PARTIES. IN NO EVENT WILL Klutchh BE LIABLE FOR ANY DAMAGES WHATSOEVER IN AN AMOUNT overAN AMOUNT OF IN 100.

                            **Retention of Data:**

                            Your personal information may be retained and may continue to be used until (i) the relevant purposes for the use of your information described in this Privacy Policy is no longer applicable; and (ii) we are no longer required by applicable law, regulations, contractual obligations, or legitimate business purposes to retain your personal information and the retention of your personal information is not required for the establishment, exercise or

                            defense of any legal claim.
                        </TextWhite>



                        <TextWhiteHeading>
                            Updating Information:
                        </TextWhiteHeading>

                        <TextWhite>
                            You will promptly notify Klutchh if there are any changes, updates, or modifications to your information. Further, you may also review, update or modify your information and user preferences by logging into your Profile page on the Portal.
                        </TextWhite>
                </View> */}
            </ScrollView>
        </SafeAreaView>
    )
}

export default PolicyDetails