import React from "react";
import { Accordion, Card } from "react-bootstrap";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import style from "../../CSS module/SidebarAccorditionPujas.module.css";
import { Link } from "react-router-dom";

const CustomToggle = ({ children, eventKey, isExpanded, onToggle }) => {
  return (
    <div
      onClick={() => onToggle(eventKey)}
      className="d-flex align-items-center "
      style={{
        cursor: "pointer",
        backgroundColor: "#FFE4B5",
        padding: "10px 15px",
        borderRadius: "10px",
        fontWeight: "bold",
        marginTop: "0",
        color: "#8B4513",
        boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      {isExpanded ? (
        <FaChevronDown className="me-2" />
      ) : (
        <FaChevronRight className="me-2" />
      )}
      {children}
    </div>
  );
};

const SidebarAccordionpujas = ({
  expandedKey,
  onToggle,
  nestedExpandedKey,
  onNestedToggle,
}) => {
  return (
    // <div
    //   style={{
    //     background: "linear-gradient(to bottom, #FDF6E3, #FFE4B5)",
    //     padding: "15px",
    //     borderTopLeftRadius: "15px",
    //     borderTopRigthRadius: "15px",
    //     boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
    //   }}
    // >
    //   <Accordion
    //     activeKey={expandedKey}
    //     style={{
    //       backgroundColor: "transparent",
    //       padding: "0",
    //       margin: "0",
    //       border: "none",
    //     }}
    //   >

    //     {/* sorting to one */}
    //     <Card
    //       style={{
    //         backgroundColor: "#FFF8DC",
    //         borderRadius: "15px",
    //         marginBottom: "10px",
    //         padding: "0",
    //         overflow: "hidden",
    //         boxShadow: "none",
    //       }}
    //     >
    //       <Card.Header
    //         style={{
    //           backgroundColor: "#FFEBCD",
    //           borderRadius: "10px",
    //           padding: "0",
    //           margin: "0",
    //         }}
    //       >
    //         <CustomToggle
    //           eventKey="7"
    //           isExpanded={expandedKey === "7"}
    //           onToggle={onToggle}
    //         >
    //           Homam puja
    //         </CustomToggle>
    //       </Card.Header>

    //       <Accordion.Collapse eventKey="7">
    //         <Card.Body style={{ padding: "15px", borderRadius: "10px" }}>
    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //               padding: "0",
    //               overflow: "hidden",
    //               boxShadow: "none",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="0"
    //                 isExpanded={expandedKey === "0"}
    //                 onToggle={onToggle}
    //               >
    //                 Ganesh Puja
    //               </CustomToggle>
    //             </Card.Header>

    //             <Accordion.Collapse eventKey="0">
    //               <Card.Body style={{ padding: "15px", borderRadius: "10px" }}>
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Ganesh Chaturthi Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Sankashti Ganesh Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Vinayaka Chaturthi
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="1"
    //                 isExpanded={expandedKey === "1"}
    //                 onToggle={onToggle}
    //               >
    //                 Navratri Puja
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="1">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Mahanavami Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Dussehra Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Lakshmi Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="2"
    //                 isExpanded={expandedKey === "2"}
    //                 onToggle={onToggle}
    //               >
    //                 Diwali Puja
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="2">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Varalakshmi Vratam
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Deepavali Lakshmi Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Saraswati Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="3"
    //                 isExpanded={expandedKey === "3"}
    //                 onToggle={onToggle}
    //               >
    //                 Maha Shivaratri
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="3">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Pradosh Vrat
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Shiva Lingam Puja
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Vishnu Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="4"
    //                 isExpanded={expandedKey === "4"}
    //                 onToggle={onToggle}
    //               >
    //                 Vaikuntha Ekadashi
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="4">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link
    //                       to="#/tulsi-vivah"
    //                       className={style.cardbodyitems}
    //                     >
    //                       Tulsi Vivah
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link
    //                       to="#/rama-navami"
    //                       className={style.cardbodyitems}
    //                     >
    //                       Rama Navami
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="#/kali-puja" className={style.cardbodyitems}>
    //                       Kali Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="5"
    //                 isExpanded={expandedKey === "5"}
    //                 onToggle={onToggle}
    //               >
    //                 Kali Puja
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="5">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Kali Chaudas
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Kali Pradosh
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Gauri Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>

    //           <Card
    //             style={{
    //               backgroundColor: "#FFF8DC",
    //               borderRadius: "15px",
    //               marginBottom: "10px",
    //             }}
    //           >
    //             <Card.Header
    //               style={{
    //                 backgroundColor: "#FFEBCD",
    //                 borderRadius: "10px",
    //                 padding: "0",
    //                 margin: "0",
    //               }}
    //             >
    //               <CustomToggle
    //                 eventKey="6"
    //                 isExpanded={expandedKey === "6"}
    //                 onToggle={onToggle}
    //               >
    //                 Hanuman Puja
    //               </CustomToggle>
    //             </Card.Header>
    //             <Accordion.Collapse eventKey="6">
    //               <Card.Body
    //                 style={{
    //                   backgroundColor: "#FFF5EE",
    //                   padding: "15px",
    //                   borderRadius: "10px",
    //                 }}
    //               >
    //                 <ul
    //                   style={{
    //                     listStyleType: "disc",
    //                     paddingLeft: "20px",
    //                     margin: "0",
    //                   }}
    //                 >
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Hanuman Jayanti
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Chalisa Recitation
    //                     </Link>
    //                   </li>
    //                   <li>
    //                     <Link to="/" className={style.cardbodyitems}>
    //                       Satyanarayan Puja
    //                     </Link>
    //                   </li>
    //                 </ul>
    //               </Card.Body>
    //             </Accordion.Collapse>
    //           </Card>
    //         </Card.Body>
    //       </Accordion.Collapse>
    //     </Card>
    //   </Accordion>
    // </div>
    <div
      style={{
        background: "linear-gradient(to bottom, #FDF6E3, #FFE4B5)",
        padding: "15px",
        borderTopLeftRadius: "15px",
        borderTopRigthRadius: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Accordion
        activeKey={expandedKey} // Parent accordion state
        style={{
          backgroundColor: "transparent",
          padding: "0",
          margin: "0",
          border: "none",
        }}
      >
        <Card
          style={{
            backgroundColor: "#FFF8DC",
            borderRadius: "15px",
            marginBottom: "10px",
            padding: "0",
            overflow: "hidden",
            boxShadow: "none",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#FFEBCD",
              borderRadius: "10px",
              padding: "0",
              margin: "0",
            }}
          >
            <CustomToggle
              eventKey="7"
              isExpanded={expandedKey === "7"}
              onToggle={onToggle}
            >
              Homam puja
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="7">
            <Card.Body style={{ padding: "15px", borderRadius: "10px" }}>
              {/* Nested accordion */}
              <Accordion
                activeKey={nestedExpandedKey}
                style={{
                  backgroundColor: "transparent",
                  padding: "0",
                  margin: "0",
                  border: "none",
                }}
              >
                {/* first */}
                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="0"
                      isExpanded={nestedExpandedKey === "0"}
                      onToggle={onNestedToggle}
                    >
                      Ganesh Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{ padding: "15px", borderRadius: "10px" }}
                    >
                      {/* List items */}
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Ganesh Chaturthi Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Sankashti Ganesh Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Vinayaka Chaturthi
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                {/* second */}
                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                    padding: "0",
                    overflow: "hidden",
                    boxShadow: "none",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="17"
                      isExpanded={nestedExpandedKey === "17"}
                      onToggle={onNestedToggle}
                    >
                      Ganesh Puja
                    </CustomToggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey="17">
                    <Card.Body
                      style={{ padding: "15px", borderRadius: "10px" }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Ganesh Chaturthi Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Sankashti Ganesh Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Vinayaka Chaturthi
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="6"
                      isExpanded={nestedExpandedKey === "6"}
                      onToggle={onNestedToggle}
                    >
                      Hanuman Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body
                      style={{
                        backgroundColor: "#FFF5EE",
                        padding: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Hanuman Jayanti
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Chalisa Recitation
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Satyanarayan Puja
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="5"
                      isExpanded={nestedExpandedKey === "5"}
                      onToggle={onNestedToggle}
                    >
                      Kali Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body
                      style={{
                        backgroundColor: "#FFF5EE",
                        padding: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Kali Chaudas
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Kali Pradosh
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Gauri Puja
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      <Accordion
        activeKey={expandedKey} // Parent accordion state
        style={{
          backgroundColor: "transparent",
          padding: "0",
          margin: "0",
          border: "none",
        }}
      >
        <Card
          style={{
            backgroundColor: "#FFF8DC",
            borderRadius: "15px",
            marginBottom: "10px",
            padding: "0",
            overflow: "hidden",
            boxShadow: "none",
          }}
        >
          <Card.Header
            style={{
              backgroundColor: "#FFEBCD",
              borderRadius: "10px",
              padding: "0",
              margin: "0",
            }}
          >
            <CustomToggle
              eventKey="102"
              isExpanded={expandedKey === "102"}
              onToggle={onToggle}
            >
              Sarpa Dosha
            </CustomToggle>
          </Card.Header>
          <Accordion.Collapse eventKey="102">
            <Card.Body style={{ padding: "15px", borderRadius: "10px" }}>
              {/* Nested accordion */}
              <Accordion
                activeKey={nestedExpandedKey}
                style={{
                  backgroundColor: "transparent",
                  padding: "0",
                  margin: "0",
                  border: "none",
                }}
              >
                {/* first */}
                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="0"
                      isExpanded={nestedExpandedKey === "0"}
                      onToggle={onNestedToggle}
                    >
                      Ganesh Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body
                      style={{ padding: "15px", borderRadius: "10px" }}
                    >
                      {/* List items */}
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Ganesh Chaturthi Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Sankashti Ganesh Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Vinayaka Chaturthi
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                {/* second */}
                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                    padding: "0",
                    overflow: "hidden",
                    boxShadow: "none",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="17"
                      isExpanded={nestedExpandedKey === "17"}
                      onToggle={onNestedToggle}
                    >
                      Ganesh Puja
                    </CustomToggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey="17">
                    <Card.Body
                      style={{ padding: "15px", borderRadius: "10px" }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Ganesh Chaturthi Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Sankashti Ganesh Puja
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Vinayaka Chaturthi
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="6"
                      isExpanded={nestedExpandedKey === "6"}
                      onToggle={onNestedToggle}
                    >
                      Hanuman Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="6">
                    <Card.Body
                      style={{
                        backgroundColor: "#FFF5EE",
                        padding: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Hanuman Jayanti
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Chalisa Recitation
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Satyanarayan Puja
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>

                <Card
                  style={{
                    backgroundColor: "#FFF8DC",
                    borderRadius: "15px",
                    marginBottom: "10px",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "#FFEBCD",
                      borderRadius: "10px",
                      padding: "0",
                      margin: "0",
                    }}
                  >
                    <CustomToggle
                      eventKey="5"
                      isExpanded={nestedExpandedKey === "5"}
                      onToggle={onNestedToggle}
                    >
                      Kali Puja
                    </CustomToggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="5">
                    <Card.Body
                      style={{
                        backgroundColor: "#FFF5EE",
                        padding: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      <ul
                        style={{
                          listStyleType: "disc",
                          paddingLeft: "20px",
                          margin: "0",
                        }}
                      >
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Kali Chaudas
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Kali Pradosh
                          </Link>
                        </li>
                        <li>
                          <Link to="/" className={style.cardbodyitems}>
                            Gauri Puja
                          </Link>
                        </li>
                      </ul>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

      {/* test */}
    </div>
  );
};

export default SidebarAccordionpujas;
