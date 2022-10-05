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
import React, { useState } from "react";

const Client = (props) => {
  const [bankingForm, setBankingForm] = useState({});

  function handleSubmit() {
    setBankingForm([...bankingForm, setBankingForm]);
  }

  return (
    <IonCard style={{ width: "700px" }}>
      <IonHeader>
        <IonToolbar>
          <IonCardTitle>BANKING DETAILS</IonCardTitle>
        </IonToolbar>
      </IonHeader>

      <IonLabel>Banking Information</IonLabel>
      <IonItem>
        <IonSelect
          title="select Bank"
          onIonChange={(e) =>
            setBankingForm({ ...bankingForm, bank: e.target.value })
          }
          placeholder="Select Bank"
        >
          <IonSelectOption>FNB</IonSelectOption>
          <IonSelectOption>ABSA</IonSelectOption>
          <IonSelectOption>STANDARD Bank</IonSelectOption>
          <IonSelectOption>TYME Bank</IonSelectOption>
          <IonSelectOption>Capitect Bank</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>Bank Code</IonLabel>
        <IonInput
          type="number"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, bankCode: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>Account Number</IonLabel>
        <IonInput
          type="number"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, accountNumber: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonLabel>Account name</IonLabel>
        <IonInput
          type="text"
          onIonInput={(e) =>
            setBankingForm({ ...bankingForm, accountName: e.target.value })
          }
        />
      </IonItem>
      <IonItem>
        <IonSelect
          title="Account Type"
          onIonChange={(e) =>
            setBankingForm({ ...bankingForm, accountType: e.target.value })
          }
          placeholder="Savings"
        >
          <IonSelectOption>Debit</IonSelectOption>
          <IonSelectOption> Credit</IonSelectOption>
          <IonSelectOption>Savings</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonButton size="small" color="success" onClick={handleSubmit}>
        SUBMIT
      </IonButton>
    </IonCard>
  );
};

export default Client;
