import {
  IonButton,
  IonCard,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonToolbar
} from "@ionic/react";
import React ,{ useState } from "react";


const Customer = (props) => {
 

  const [bankingForm, setBankingForm] = useState({});

  function handleSubmit = (bankingForm) =>  {
    setBankingForm([...bankingForm, bankingForm]);

    
 
  }
 

  return (
    <IonCard style={{ width: "700px" }}>
      <IonHeader>
        <IonToolbar>
          <IonCardTitle>CUSTOMER DETAILS</IonCardTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem>
        <IonSelect
          title="Legal form"
          onIonChange={(e) =>
            setBankingForm({ ...bankingForm, legal: e.target.value })
          }
        >
          <IonSelectOption>PERSON</IonSelectOption>
          <IonSelectOption> CLIENT</IonSelectOption>
          <IonSelectOption> ADMIN</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonItem>
        <IonLabel>First Name</IonLabel>
        <IonInput
          type="text"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, name: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>Middle Name</IonLabel>
        <IonInput
          type="text"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, surname: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>External ID</IonLabel>
        <IonInput
          type="text"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, externalId: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>Date of Birth</IonLabel>
        <IonInput
          type="date"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, birthDate: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>Mobile No</IonLabel>
        <IonInput
          type="number"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, mobileNo: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonSelect
          title="Gender"
          onIonChange={(e) =>
            setBankingForm({ ...bankingForm, gender: e.target.value })
          }
        >
          <IonSelectOption>Male</IonSelectOption>
          <IonSelectOption> Female</IonSelectOption>
        </IonSelect>
      </IonItem>

      <IonButton size="small" color="success" onClick={handleSubmit}>
        SUBMIT
      </IonButton>
      <IonContent style={{ width: "700px" }}>
      <IonHeader>
        <IonToolbar>
        </IonToolbar>
      </IonHeader>
      
      {bankingForm.map((item) => (
        <IonItem>
          <IonLabel>
            {item.legal} {item.name}
            {item.surname} {item.externalId}
            {item.birthDate} {item.mobileNo}
            {item.gender} 
          </IonLabel>
        </IonItem>
      ))}
    </IonContent>
    </IonCard>
  );
};

export default Customer;


