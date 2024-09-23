import styled from "styled-components";
import { FaRupeeSign, FaEye, FaEdit } from "react-icons/fa";
import { useState } from "react";
import { BadgeCheck } from "lucide-react";
import { Link } from 'react-router-dom'
import { Get_All_Plans } from "../../CommonAPI/User";

import { useEffect } from "react";

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 300px; /* Reduced width for better horizontal scrolling */
  padding: 15px;y
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out,
    background-color 0.3s ease-in-out, color 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(to right, #3f414d 0%, #3f414d 100%) !important;
    color: #fff;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  &:hover h2,
  &:hover h4,
  &:hover p {
    color: #fff;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff;
  border-radius: 8px;
  width: 600px;
  padding: 20px;
  position: relative;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display: grid;
  gap: 20px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 20px;
  color: #333;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1rem;
  color: #fff;
  background-color: ${(props) => (props.primary ? "#007BFF" : "#28a745")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  transition: background-color 0.3s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#218838")};
  }

  svg {
    margin-right: 5px;
  }
`;
const ServicesList = () => {

  const [selectedPlan, setSelectedPlan] = useState(null);
  const [editPlan, setEditPlan] = useState(null);
  const [GetAllPlans, setAllPlans] = useState({ loading: true, data: [] });


  useEffect(() => {
    GetAllPlansData();
  }, []);

  const handleViewClick = (plan) => {
    setSelectedPlan(plan);
  };

  const handleModalClose = () => {
    setSelectedPlan(null);
    setEditPlan(null);
  };

  const GetAllPlansData = async () => {
    await Get_All_Plans()
      .then((response) => {
        if (response.Status) {
          setAllPlans({
            loading: false,
            data: response.Admin,
          });
        }
      });
  };


  const imgArr = [
    "https://cdn.pixabay.com/photo/2024/05/31/05/24/trading-8799817_640.png",
    "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_640.jpg",
    "https://cdn.pixabay.com/photo/2020/04/16/15/40/stock-5051155_640.jpg",
    "https://cdn.pixabay.com/photo/2023/07/28/08/06/finance-8154775_640.jpg",
  ];

  const data = [
    {
      name: "Basic Plan",
      title: "Beginner Friendly",
      description:
        "Perfect for beginners who want to get started with basic features.",
      image:
        "https://cdn.pixabay.com/photo/2024/05/31/05/24/trading-8799817_640.png",
      prices: {
        monthly: "₹750",
        quarterly: "₹1800",
        halfYearly: "₹3400",
        yearly: "₹6000",
      },
    },
    {
      name: "Standard Plan",
      title: "Popular Choice",
      description:
        "A great choice for most users, offering a balance of features and cost.",
      image:
        "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_640.jpg",
      prices: {
        monthly: "₹1500",
        quarterly: "₹3750",
        halfYearly: "₹6800",
        yearly: "₹12000",
      },
    },
    {
      name: "Premium Plan",
      title: "Advanced Features",
      description: "Get access to premium features and advanced settings.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/16/15/40/stock-5051155_640.jpg",
      prices: {
        monthly: "₹2250",
        quarterly: "₹5625",
        halfYearly: "₹10200",
        yearly: "₹18000",
      },
    },
    {
      name: "Ultimate Plan",
      title: "All-Inclusive",
      description:
        "Unlock all features with no limits, designed for power users.",
      image:
        "https://cdn.pixabay.com/photo/2023/07/28/08/06/finance-8154775_640.jpg",
      prices: {
        monthly: "₹3750",
        quarterly: "₹9375",
        halfYearly: "₹18000",
        yearly: "₹30000",
      },
    },
  ];
  let servicegivenmonth = localStorage.getItem("servicegivenmonth");
  console.log(servicegivenmonth);

  const SetPlan = (index) => {
    if (servicegivenmonth === 0) {
      return null;
    }

    // Define the ranges
    const ranges = [
      { min: 1, max: 2, index: 0 },
      { min: 3, max: 5, index: 1 },
      { min: 6, max: 11, index: 2 },
      { min: 12, max: 12, index: 3 },
    ];

    // Find the matching range for the given month and index
    const matchedRange = ranges.find(
      (range) =>
        servicegivenmonth >= range.min &&
        servicegivenmonth <= range.max &&
        range.index === index
    );

    // Return BadgeCheck if the range matches, otherwise return null
    return matchedRange ? <BadgeCheck style={{ color: "green" }} /> : null;
  };

  return (
    <>

      <div className='row'>
        <div className='col-sm-12'>
          <div className='iq-card'>
            <div className='iq-card-header d-flex justify-content-between'>
              <div className='iq-header-title'>
                <h4 className='card-title'>Client Service</h4>
              </div>
              <Link to='/admin/addplan' className='btn btn-primary rounded'>
                Add Plan
              </Link>
            </div>
            <div className='iq-card-body'>
              <div style={styles.container}>
                {GetAllPlans?.data.map((plan, index) => (
                  <Card key={index} style={styles.card}>
                    <img src={imgArr[index]} alt={plan.PlanName} style={styles.image} />

                    <div style={styles.content}>
                      <h2 style={styles.title}>
                        {plan.PlanName} {SetPlan(index)}
                      </h2>

                      <h4 style={styles.subtitle}>No of Scripts: {plan.NumberofScript}</h4>
                      <div style={styles.prices}>
                        <p style={styles.priceItem}>
                          <strong>Scalping Strategy:</strong> {plan.Scalping.join(", ")}
                        </p>
                        <p style={styles.priceItem}>
                          <strong>Option Strategy:</strong> {plan['Option Strategy'].join(", ")}
                        </p>
                        <p style={styles.priceItem}>
                          <strong>Pattern Strategy:</strong> {plan?.Pattern?.join(", ")}
                        </p>
                      </div>
                      <div style={styles.buttonContainer}>
                        <Button primary onClick={() => handleViewClick(plan)} style={styles.button}>
                          BUY <FaRupeeSign className="m-1" />{plan.payment}
                        </Button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              {selectedPlan && (
                <Modal open={!!selectedPlan} onClick={handleModalClose}>
                  <ModalContent onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={handleModalClose}>×</CloseButton>
                    <img
                      src={selectedPlan.image}
                      alt={selectedPlan.name}
                      style={modalStyles.image}
                    />
                    <h2>{selectedPlan.name}</h2>
                    <h4>{selectedPlan.title}</h4>
                    <p>{selectedPlan.description}</p>
                    <div style={modalStyles.prices}>
                      <p>
                        Monthly <FaRupeeSign /> {selectedPlan.prices.monthly}
                      </p>
                      <p>
                        Quarterly <FaRupeeSign /> {selectedPlan.prices.quarterly}
                      </p>
                      <p>
                        Half-Yearly <FaRupeeSign /> {selectedPlan.prices.halfYearly}
                      </p>
                      <p>
                        Yearly <FaRupeeSign /> {selectedPlan.prices.yearly}
                      </p>
                    </div>
                  </ModalContent>
                </Modal>
              )}
            </div>
          </div>
        </div>
      </div>





    </>
  );
};

const modalStyles = {
  image: {
    width: "100%",
    height: "auto",
    maxWidth: "250px", // Fixed width same as card
    maxHeight: "150px", // Fixed height same as card
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  prices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    color: "#555",
    padding: "0",
    listStyle: "none",
  },
};

const styles = {
  container: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    padding: "5px",
    gap: "20px",
  },
  image: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "8px",
    marginBottom: "15px",
  },
  title: {
    fontSize: "1.5rem",
    margin: "10px 0",
    color: "#333",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: "1.2rem",
    margin: "5px 0",
  },
  description: {
    fontSize: "1rem",
    margin: "10px 0",
  },
  prices: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    margin: "10px 0",
    color: "#555",
    padding: "0",
    listStyle: "none",
  },
  priceItem: {
    margin: "5px 0",
    textAlign:"left",
  },
  buttonContainer: {
    marginTop: "15px",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default ServicesList;
