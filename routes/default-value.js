var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/join-form-question', function(req, res, next) {
  let joinFromQuestions = [
    {
        "language": "ESSpanish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "ESSpanish",
                "QuestionText": "Política de Privacidad & Términos y Condiciones",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Nombre del empleo deseado",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Nombre",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Apellidos",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Email",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Subir CV",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "País",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Colegio / Universidad:",
                "QuestionOrder": 50,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Teléfono:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Email:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Especialidad:",
                "QuestionOrder": 60,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Nivel de interés:",
                "QuestionOrder": 110,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Buscando pero empleado",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Buscando y disponible inmediatamente",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Interés pasivo",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Apellidos:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Nacionalidad:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Subir CV:",
                "QuestionOrder": 120,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Fecha de graduación:",
                "QuestionOrder": 70,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Nombres:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Actividades:",
                "QuestionOrder": 100,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ESSpanish",
                "QuestionText": "Promedio de calificaciones:",
                "QuestionOrder": 90,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "DEGerman",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "DEGerman",
                "QuestionText": "Datenschutzerklärung & Allgemeine Geschäftsbedingungen:",
                "QuestionOrder": 7,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "E-Mail Adresse:",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Vorname:",
                "QuestionOrder": 1,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Laden Sie Ihren Lebenslauf hoch:",
                "QuestionOrder": 6,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Gesuchte Berufsbezeichnung:",
                "QuestionOrder": 5,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Nachname:",
                "QuestionOrder": 2,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Land:",
                "QuestionOrder": 3,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "E-Mail Adresse:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Vorname:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Land:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Lehre / Ausbildung:",
                "QuestionOrder": 50,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Abschlussdatum:",
                "QuestionOrder": 70,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Hauptfach:",
                "QuestionOrder": 60,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Notendurchschnitt:",
                "QuestionOrder": 90,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Schulaktivitäten:",
                "QuestionOrder": 100,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Zinsniveau:",
                "QuestionOrder": 110,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Aktiv auf der Suche, aber Angestellte",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interessen",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Aktiv nach und ab sofort verfügbar",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Nachname:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Laden Sie ein Lebenslauf:",
                "QuestionOrder": 120,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Telefonnummer:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Land:",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Zins Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Zins",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Aktiv auf der Suche und sofort verfügbar",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Aktiv auf der Suche, aber Angestellte",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "DEGerman",
                "QuestionText": "E-Mail-Adresse:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Vorname:",
                "QuestionOrder": 30,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Nachname:",
                "QuestionOrder": 40,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Wunschberufsbezeichnung :",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "DEGerman",
                "QuestionText": "Laden Sie einen Lebenslauf:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "NLDutch",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "NLDutch",
                "QuestionText": "Privacy beleid & Algemene voorwaarden:",
                "QuestionOrder": 7,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "Land:",
                "QuestionOrder": 3,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "Gewenste functie:",
                "QuestionOrder": 5,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "Achternaam:",
                "QuestionOrder": 2,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "Upload je CV:",
                "QuestionOrder": 6,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "Voornaam:",
                "QuestionOrder": 1,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "NLDutch",
                "QuestionText": "E-mailadres:",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "SESwedish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "SESwedish",
                "QuestionText": "Integritetspolicy &  Villkor",
                "QuestionOrder": 60,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Land:",
                "QuestionOrder": 30,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Förnamn:",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Önskad jobbtitel",
                "QuestionOrder": 50,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "E-mail adress:",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Efternamn:",
                "QuestionOrder": 20,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Ladda upp CV",
                "QuestionOrder": 80,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Land:",
                "QuestionOrder": 3,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Ladda upp CV",
                "QuestionOrder": 8,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Efternamn:",
                "QuestionOrder": 2,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Förnamn:",
                "QuestionOrder": 1,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "E-mail adress:",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Integritetspolicy & Villkor",
                "QuestionOrder": 6,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "SESwedish",
                "QuestionText": "Önskad jobbtitel",
                "QuestionOrder": 5,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "ITItalian",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "ITItalian",
                "QuestionText": "Normativa per la Privacy & Termini e Condizioni:",
                "QuestionOrder": 7,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Titolo Professionale Desiderato",
                "QuestionOrder": 5,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Inserisci un Curriculum Vitae:",
                "QuestionOrder": 6,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Nome",
                "QuestionOrder": 1,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Nazione",
                "QuestionOrder": 3,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Indirizzo Email:",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Cognome",
                "QuestionOrder": 2,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Attività:",
                "QuestionOrder": 100,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Nazione:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Nome:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Carica un curriculum:",
                "QuestionOrder": 120,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Cognome:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Scuola / Università:",
                "QuestionOrder": 50,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Specializzazione:",
                "QuestionOrder": 60,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Data di laurea:",
                "QuestionOrder": 70,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": " Indirizzo Email:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Interessato a:",
                "QuestionOrder": 110,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Attivamente cercando e immediatamente disponibile",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Interessi passivi",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Attivamente cercando ma impiegato",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Media dei voti:",
                "QuestionOrder": 90,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "ITItalian",
                "QuestionText": "Numero di telefono:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "CAFrench",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "CAFrench",
                "QuestionText": "Accepter Politique de confidentialité & Acceptez les termes et conditions?",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Accepter Politique de confidentialité & Acceptez les termes et conditions?",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Nom :",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Niveau d'intérêt",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Activement à la recherche et disponible immédiatement",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Les intérêts passifs",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Activement à la recherche, mais Employé",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Prénom :",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Adresse électronique :",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Nom :",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Prénom :",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Adresse électronique :",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Titre de l’emploi désiré :",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Titre de l’emploi désiré :",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Téléverser un CV :",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Pays",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Pays",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAFrench",
                "QuestionText": "Téléchargez  un CV :",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "CAEnglish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "CAEnglish",
                "QuestionText": "Accept Privacy Policy & Accept Terms and Conditions?",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Country",
                "QuestionOrder": 50,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Accept Privacy Policy & Accept Terms and Conditions?",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Accept Privacy Policy & Accept Terms and Conditions?",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "College/University:",
                "QuestionOrder": 20,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Graduation Date:",
                "QuestionOrder": 40,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Major:",
                "QuestionOrder": 30,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Interest Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 60,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 70,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CAEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "USEnglish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "USEnglish",
                "QuestionText": "Country",
                "QuestionOrder": 50,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Graduation Date:",
                "QuestionOrder": 40,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Interest Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Interest Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "USEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 60,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 70,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "College/University:",
                "QuestionOrder": 20,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "USEnglish",
                "QuestionText": "Major:",
                "QuestionOrder": 30,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "UKEnglish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "UKEnglish",
                "QuestionText": "Country",
                "QuestionOrder": 50,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Privacy Policy & Terms and Conditions",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Interest Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "EmailAddress:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Major:",
                "QuestionOrder": 30,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "College/University:",
                "QuestionOrder": 20,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 60,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 70,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "UKEnglish",
                "QuestionText": "Graduation Date:",
                "QuestionOrder": 40,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMEnglish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMEnglish",
                "QuestionText": "Country",
                "QuestionOrder": 13,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Phone Number",
                "QuestionOrder": 50,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Upload a Resume:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Activities",
                "QuestionOrder": 65,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "GPA",
                "QuestionOrder": 60,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Interested in",
                "QuestionOrder": 70,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Full Time",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Internship",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Both",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Interest Level:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Major:",
                "QuestionOrder": 30,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 11,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "EmailAddress:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Upload A Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Country:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Last Name:",
                "QuestionOrder": 12,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "Graduation Date:",
                "QuestionOrder": 40,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMEnglish",
                "QuestionText": "College/University:",
                "QuestionOrder": 20,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMSouthAmSpanish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Políticas de Privacidad & Términos y Condiciones",
                "QuestionOrder": 8,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Email",
                "QuestionOrder": 1,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Nombre",
                "QuestionOrder": 2,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Subir CV",
                "QuestionOrder": 7,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Apellidos",
                "QuestionOrder": 3,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "País",
                "QuestionOrder": 4,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmSpanish",
                "QuestionText": "Nombre del empleo deseado",
                "QuestionOrder": 6,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "CNEnglish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "CNEnglish",
                "QuestionText": "Interest Level",
                "QuestionOrder": 70,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Actively looking and available immediately",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Actively Looking but Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Passive Interest",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Upload a Resume:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Country of Residence",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Upload a Resume:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Current Job Title",
                "QuestionOrder": 50,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Last Name",
                "QuestionOrder": 10,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Country of Residence",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Last Name",
                "QuestionOrder": 3,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 2,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Working Experience",
                "QuestionOrder": 60,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "First Name:",
                "QuestionOrder": 0,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Valid Work Authorisation",
                "QuestionOrder": 30,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Desired Job Title:",
                "QuestionOrder": 40,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Email Address:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Mobile Number",
                "QuestionOrder": 90,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Email address",
                "QuestionOrder": 12,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNEnglish",
                "QuestionText": "Privacy Policy & Terms and Conditions",
                "QuestionOrder": 100,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "CNMandarin",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "CNMandarin",
                "QuestionText": "姓名:",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "邮箱",
                "QuestionOrder": 20,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "期望职位",
                "QuestionOrder": 50,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "上传简历",
                "QuestionOrder": 60,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "国家",
                "QuestionOrder": 30,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "利息水平：",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "積極尋找，但就業",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "被動的利息",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "積極尋找和立即可用",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "名字：",
                "QuestionOrder": 30,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "電子郵件地址：",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "姓氏：",
                "QuestionOrder": 40,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "期望職位：",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "國家：",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "CNMandarin",
                "QuestionText": "上傳簡歷：",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "GRGreek",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "GRGreek",
                "QuestionText": "χώρα",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": "προσδοκίες των μισθών",
                "QuestionOrder": 80,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": "επώνυμο",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": "Επιθυμητή Επάγγελμα",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": "Όνομα",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": "Διεύθυνση Ηλεκτρονικού Ταχυδρομείου:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "GRGreek",
                "QuestionText": " Ανεβάστε ένα βιογραφικό",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMThai",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMThai",
                "QuestionText": "อัพโหลดประวัติ:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMThai",
                "QuestionText": "ที่อยู่อีเมล์:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMThai",
                "QuestionText": "ชื่อ:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMThai",
                "QuestionText": "นามสกุล:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMThai",
                "QuestionText": "ที่ต้องการตำแหน่งงาน:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMThai",
                "QuestionText": "ประเทศ:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "PLPolish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "PLPolish",
                "QuestionText": "Imię:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "PLPolish",
                "QuestionText": "Kraj:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "PLPolish",
                "QuestionText": "Nazwisko:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "PLPolish",
                "QuestionText": "Prześlij CV:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "PLPolish",
                "QuestionText": "Pożądany Tytuł pracy:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "PLPolish",
                "QuestionText": "E-mail:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMSimplifiedChinese",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "期望职位\t",
                "QuestionOrder": 50,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "国家",
                "QuestionOrder": 30,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "姓名:",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "邮箱",
                "QuestionOrder": 20,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "感兴趣程度",
                "QuestionOrder": 40,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "正在找工作(可以立即入职)",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "暂时关注(已在职)",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "仅仅关注",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "RMSimplifiedChinese",
                "QuestionText": "上传简历",
                "QuestionOrder": 60,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMSouthAmPortuguese",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Sobrenome",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Primeiro Nome",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Endereço de E-mail",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Cargo Pretendido",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Anexar um Currículo",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "País",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Aceito a política de privacidade e Termos e Condições",
                "QuestionOrder": 65,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Colocar um Currículo:",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Endereço de E-mail:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "País:",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Apelido:",
                "QuestionOrder": 40,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Desejado Título do trabalho:",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Interesse Nível:",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Activamente à procura mas Employed",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "A busca ativa e disponível imediatamente",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Juros passiva",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "RMSouthAmPortuguese",
                "QuestionText": "Primeiro Nome:",
                "QuestionOrder": 30,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "FRFrench",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "FRFrench",
                "QuestionText": "Politique de confidentialité & Conditions générales",
                "QuestionOrder": 80,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Nom :",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Niveau d'intérêt",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Activement à la recherche et disponible immédiatement",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Activement à la recherche, mais Employé",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": true
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Les intérêts passifs",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": true
                    }
                ]
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Prénom :",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Adresse électronique :",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Email :",
                "QuestionOrder": 30,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Titre de l’emploi désiré :",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Titre de l’emploi recherché :",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Téléverser un CV :",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Nom :",
                "QuestionOrder": 10,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Prénom :",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Pays",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Pays",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Téléchargez un CV :",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Date de l'obtention du diplôme:",
                "QuestionOrder": 70,
                "OptionDisplayType": "GraduationDate",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Spécialisation:",
                "QuestionOrder": 60,
                "OptionDisplayType": "Major",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Nom:",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Intéressé par:",
                "QuestionOrder": 110,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "Recherche activement et immédiatement disponible",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "Intérêt passif",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "Recherchant activement mais Employé",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Collège / Université:",
                "QuestionOrder": 50,
                "OptionDisplayType": "CollegeUniversity",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Pays:",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Email:",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Activités:",
                "QuestionOrder": 100,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Prénom:",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "GPA:",
                "QuestionOrder": 90,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Ajouter un CV:",
                "QuestionOrder": 120,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "FRFrench",
                "QuestionText": "Numéro de téléphone:",
                "QuestionOrder": 80,
                "OptionDisplayType": "ShortText",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "CollegeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMArabic",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMArabic",
                "QuestionText": "المسمي الوظيفي المرغوب",
                "QuestionOrder": 50,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "تحميل السيرة الذاتية",
                "QuestionOrder": 60,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "الاسم الأول",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "البلد",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "عنوان البريد الإلكتروني",
                "QuestionOrder": 30,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "استعرض سياسة الخصوصية وقبول الشروط والأحكام؟",
                "QuestionOrder": 70,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMArabic",
                "QuestionText": "اسم العائلة",
                "QuestionOrder": 20,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMTurkish",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMTurkish",
                "QuestionText": "İstenen İş Unvanı",
                "QuestionOrder": 40,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMTurkish",
                "QuestionText": "Adı",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMTurkish",
                "QuestionText": "E-posta Adresi",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMTurkish",
                "QuestionText": "Bir Özgeçmiş yükle",
                "QuestionOrder": 80,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMTurkish",
                "QuestionText": "Ülke",
                "QuestionOrder": 30,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMTurkish",
                "QuestionText": "Soyadı",
                "QuestionOrder": 20,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMPortuguese",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMPortuguese",
                "QuestionText": "Carregar um Currículo",
                "QuestionOrder": 90,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMPortuguese",
                "QuestionText": "Endereço eletrónico",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMPortuguese",
                "QuestionText": "País",
                "QuestionOrder": 40,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMPortuguese",
                "QuestionText": "Nome Próprio",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMPortuguese",
                "QuestionText": "Apelido",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMPortuguese",
                "QuestionText": "Cargo pretendido",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMJapanese",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMJapanese",
                "QuestionText": "カントリー",
                "QuestionOrder": 30,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "再開をアップロード",
                "QuestionOrder": 50,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "電子メールアドレス",
                "QuestionOrder": 0,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "苗字",
                "QuestionOrder": 20,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "希望の職種",
                "QuestionOrder": 40,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "ファーストネーム",
                "QuestionOrder": 10,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "希望職種：",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "履歴書をアップロード：",
                "QuestionOrder": 70,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "姓：",
                "QuestionOrder": 40,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "関心度：",
                "QuestionOrder": 50,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "受動的な関心",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "積極的にすぐに見て、利用可能な",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "積極的に探している相手が、雇用",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "国：",
                "QuestionOrder": 20,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "メールアドレス：",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMJapanese",
                "QuestionText": "ファーストネーム：",
                "QuestionOrder": 30,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "EmployeeNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    },
    {
        "language": "RMKorean",
        "field": "JoinFormQuestions",
        "didPrefix": "JQ",
        "OptionDidName": "QuestionOptionDID",
        "OptionDidPrefix": "QO",
        "defaultValue": [
            {
                "Language": "RMKorean",
                "QuestionText": "희망하는 직위",
                "QuestionOrder": 60,
                "OptionDisplayType": "DesiredJobTitle",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "관심도 선택",
                "QuestionOrder": 80,
                "OptionDisplayType": "InterestLevel",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": [
                    {
                        "OptionOrder": 10,
                        "OptionDisplayText": "적극적으로 찾고 있으며 즉시 이용이 가능합니다.",
                        "OptionValue": "AVAILABLENOW",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 20,
                        "OptionDisplayText": "소극적인 관심",
                        "OptionValue": "PASSIVE",
                        "IsEnabled": false
                    },
                    {
                        "OptionOrder": 30,
                        "OptionDisplayText": "적극적으로 찾고 있지만 이미 채용된 직위입니다.",
                        "OptionValue": "EMPLOYED",
                        "IsEnabled": false
                    }
                ]
            },
            {
                "Language": "RMKorean",
                "QuestionText": "국가",
                "QuestionOrder": 50,
                "OptionDisplayType": "Geography",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "이름",
                "QuestionOrder": 20,
                "OptionDisplayType": "FirstName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "이력서 업로드하기:",
                "QuestionOrder": 100,
                "OptionDisplayType": "ResumeUpload",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "성",
                "QuestionOrder": 30,
                "OptionDisplayType": "LastName",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "이메일 주소",
                "QuestionOrder": 10,
                "OptionDisplayType": "EmailAddress",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": true,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            },
            {
                "Language": "RMKorean",
                "QuestionText": "개인 정보 보호 정책에 동의합니다",
                "QuestionOrder": 70,
                "OptionDisplayType": "AcceptPrivacyAndTerms",
                "ValidationType": "None",
                "IsEnabled": true,
                "IsUserRequired": false,
                "QuestionNetworkType": "TalentNetwork",
                "JoinFormQuestionBranches": [],
                "JoinFormQuestionOptions": []
            }
        ]
    }
];
  res.json(joinFromQuestions);
});

router.get('/emails', function(req, res, next) {
  let emails = [
    {
        "language": "CAFrench",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "CAFrench",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bienvenue sur notre réseau Talent!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Bienvenu {$FirstName$},<br />\n<br />C’est la première étape vers votre nouveau poste à {$TalentNetworkName$}. Nous allons continuer de vous aider en vous tenant informé de tout nouveau poste qui pourrait vous convenir.<br />\n<br />Voici quelques postes qui sont actuellement ouvert aujourd’hui:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Bonjour {$FirstName$},Bienvenue et merci de devenir membre du réseau de talents de {$TalentNetworkName$} ! Nous vous invitons à développer l’intérêt que vous portez à notre compagnie et aux carrières passionnantes de notre secteur industriel en visitant souvent {$TNLinkNoSiteID$} puisque nous y faisons régulièrement la mise à jour des postes offerts. Nous vous informerons également des meilleures opportunités chez {$TalentNetworkName$} qui correspondent à vos intérêts.Nous vous souhaitons bonne chance dans vos recherches et vous remercions encore de vous joindre au réseau de talents de {$TalentNetworkName$} Nous sommes impatients de vous en dire plus sur l'organisation et d'en apprendre davantage sur vous.{$TalentNetworkName$} Talent Network"
        }
    },
    {
        "language": "CAFrench",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "Consultez des offres similaires chez {$TalentNetworkName$}",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Bonjour {$FirstName$}, \n<br />\n<br />\nNous vous remercions d’avoir récemment postulé chez {$TalentNetworkName$}. \n<br />\n<br />\nVous trouverez ci-dessous d’autres offres similaires : \n<br />\n<br />",
            "JobAlertClosingHTML": "<br />\nCordialement,\n<br />\n<br /> \nL’équipe recrutement \n<br />\n<br />"
        }
    },
    {
        "language": "CAFrench",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Des emplois près de {$JobsNearYouLocation$} de {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Bonjour {$FirstName$}, <br /> <br />Nous vous remercions pour avoir exprimé leur intérêt à travailler avec {$TalentNetworkName$}. Nous voulions partager les opportunités suivantes près de {$JobsNearYouLocation$}. ous ou quelqu'un que vous connaissez est intéressé.<br /><br />",
            "JobsNearYouClosingHTML": "Bewerben, <br /> <br /> Équipe de {$TalentNetworkName$}.<br /><br />"
        }
    },
    {
        "language": "CAFrench",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Plus d’offres d’Emploi à {$TalentNetworkName$} similaires à  {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Bonjour {$FirstName$},<br /><br /> Nous vous remercions de votre intérêt récent au rôle de  {$JobTitle$} situé à {$TalentNetworkName$}. Voici d'autres emplois similiares: <br /><br / >",
            "AfterApplyClosingHTML": "Merci <br /> <br />L’équipe {$TalentNetworkName$}"
        }
    },
    {
        "language": "CNEnglish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "CNEnglish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welcome to our Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Welcome {$FirstName$},<br />\n<br />Searching for your dream job isn't easy and we're thrilled to hear you're interested in jobs at {$TalentNetworkName$}. \nWe'll try and make your search easier by sending you new jobs that match your current interests as they become available.<br />\n<br />In the meantime, get your search started today with these great opportunities!<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Hello {$FirstName$},Welcome and thank you for becoming a member of the {$TalentNetworkName$} Talent Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting {$TNLinkWithSiteID$} often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests. We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Talent Network. We look forward to telling you more about the organization and learning more about you. {$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "language": "CNEnglish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} has jobs you may be interested in",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hi {$FirstName$}, <br /><br />Here are some jobs you may be interested in from <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We'll check for new positions frequently and send you an email if we find any matches.<br /><br />",
            "JobAlertClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "CNEnglish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Jobs near {$JobsNearYouLocation$} from {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hi {$FirstName$}, <br /><br />Thank you for expressing interest in working with <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We wanted to share the following opportunities near {$JobsNearYouLocation$} in case you or someone you know is interested.<br /><br />",
            "JobsNearYouClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br /><br />"
        }
    },
    {
        "language": "CNEnglish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "More Jobs at {$TalentNetworkName$} like {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hi {$FullName$}, <br /><br />Thank you for your recent interest in our {$JobTitle$} position at {$TalentNetworkName$}. Here are other similar jobs: <br /><br />",
            "AfterApplyClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "CNMandarin",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "CNMandarin",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "欢迎来到我们的人才网！",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />欢迎您 {$FirstName$},<br />\n<br />祝贺你开始了在 {$TalentNetworkName$}。 寻找新工作的第一步。我们会向您发送您感兴趣的职位，帮助您找到理想的工作。<br />\n<br />这里有些职位你现在就可以申请：<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "language": "CNMandarin",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FullName$}, 查看我们从{$TalentNetworkName$}为您推荐的职位",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "亲爱的{$FullName$}, <br /><br />作为{$TalentNetworkName$}人才网络的成员，我们将向您推荐符合您个人条件的工作职位。如果需要了解更多就业机会，请搜索我们的当前职位空缺列表：{$TNLinkNoSiteID$}<br /><br />{$HTMLJobList$}",
            "JobAlertClosingHTML": "谢谢！<br /> <br />{$TalentNetworkName$} Team. <br />"
        }
    },
    {
        "language": "CNMandarin",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "{$JobsNearYouLocation$}热门招聘，{$TalentNetworkName$}最新招聘职位",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "{$FirstName$}, 您好! <br /> <br />感谢您对{$TalentNetworkName$}的关注！您可能还会对{$JobsNearYouLocation$}其他的工作机会感兴趣，相关职位如下:<br /><br />",
            "JobsNearYouClosingHTML": "谢谢！<br /> <br />{$TalentNetworkName$} Team. <br />"
        }
    },
    {
        "language": "CNMandarin",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "{$TalentNetworkName$}{$JobTitle$}相关职位招聘",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "{$FirstName$}您好, <br/><br />感谢您投递我们在{$TalentNetworkName$}的{$JobTitle$}职位，以下是更多相关职位：<br /><br / >",
            "AfterApplyClosingHTML": "谢谢, <br /><br />{$TalentNetworkName$}"
        }
    },
    {
        "language": "DEGerman",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "DEGerman",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Willkommen beim {$TalentNetworkName$} Talent Netwo",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Willkommen {$FirstName$},<br />\n<br />Herzlichen Glückwunsch! Den ersten Schritt auf dem Weg zu einem neuen Job bei {$TalentNetworkName$} haben Sie bereits getan. Wir möchten Sie gerne weiterhin dabei unterstützen, eine passende Stelle zu finden. Künftig erhalten Sie von uns Stellenausschreibungen, die zu Ihren Interessen passen.<br />\n<br />Hier finden Sie die ersten Beispiele:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Guten Tag {$FirstName$},\n\nwir heißen Sie herzlich willkommen und danken Ihnen, dass Sie dem {$TalentNetworkName$}-Talent-Network beigetreten sind! Wir empfehlen Ihnen, Ihr Interesse an unserem Unternehmen weiter zu vertiefen und die interessanten Karrieremöglichkeiten in unserer Branche zu erkunden, indem Sie {$TNLinkNoSiteID$} häufig besuchen, da wir unsere Liste mit offenen Stellen regelmäßig aktualisieren. Sie werden ebenfalls über großartige Jobmöglichkeiten bei {$TalentNetworkName$} benachrichtigt, die Ihren Interessen entsprechen.\n\nWir wünschen Ihnen bei Ihrer Suche viel Glück und danken Ihnen nochmals, dass Sie dem {$TalentNetworkName$}-Talent-Network beigetreten sind. Wir freuen uns darauf, Ihnen unser Unternehmen näher zu bringen und mehr über Sie zu erfahren.\n\nIhr {$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "language": "DEGerman",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FullName$}, schauen Sie sich Stellenangebote von {$TalentNetworkName$} an.",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hallo {$FullName$},<br /> <br />als Mitglied des {$TalentNetworkName$} Talent Networks, senden wir Ihnen Stellenangebote zu, die gut zu ihrem Profil passen. Möchte Sie zusätzliche Angebote sehen, durchsuchen Sie unsere aktuellen Stellenangebote: {$TNLinkNoSiteID$}<br /> <br />Stellenanzeige Standort {$HTMLJobList$}<br /> <br />",
            "JobAlertClosingHTML": "Mit freundlichen Grüßen<br /> <br />Ihr {$TalentNetworkName$} Team<br /> <br />"
        }
    },
    {
        "language": "DEGerman",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Jobs bei {$TalentNetworkName$} in der Nähe von {$JobsNearYouLocation$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hallo {$FirstName$}, <br /><br />vielen Dank für Ihr Interesse an einer Stelle bei {$TalentNetworkName$}.<br /><br />Wir möchten Ihnen gerne diese offenen Stellen in der Nähe von {$JobsNearYouLocation$} vorstellen. <br /><br />Diesen Service stellen wir Ihnen für den Fall zur Verfügung, dass diese Jobs für Sie oder jemanden aus Ihrem Bekanntenkreis interessant sein könnten.<br /><br />",
            "JobsNearYouClosingHTML": "Vielen Dank <br /> <br />Ihr {$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "DEGerman",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Weitere Stellen bei {$TalentNetworkName$} ähnlich wie {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hallo {$FirstName$} <br /><br /> Vielen Dank für Ihr Interesse an die Stelle als {$JobTitle$} in {$TalentNetworkName$}. Hier finden Sie noch weitere ähnliche Stellenanzeigen: <br /><br / >",
            "AfterApplyClosingHTML": "Vielen Dank <br /><br />Ihr {$TalentNetworkName$} "
        }
    },
    {
        "language": "DEGerman",
        "field": "InvitationEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "",
            "SenderEmail": "",
            "HeaderImageURL": " ",
            "FooterImageURL": " ",
            "SubjectHTML": "Treten Sie dem {$TalentNetworkName$} Talent Network bei.",
            "EmailHTML": "<!DOCTYPE HTML PUBLIC \\\"-//W3C//DTD HTML 4.0 Transitional//EN\\\"><html><body><table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;'><br />Sehr geehrter Arbeitssuchender,<br /><br />wie wir sehen konnten, haben Sie sich dafür interessiert {$TalentNetworkName$} beizutreten.<br /> <br />\nIn der Vergangenheit haben Sie sich für eine Stelle beworben und wir wollen sicher gehen, dass {$TalentNetworkName$} Sie nicht aus den Augen verliert.<br /> <br />Diese E-Mail dient dazu, dass Sie und {$TalentNetworkName$} Talent Network weiterhin im regen Austausch bleiben, so dass Sie weiterhin Arbeitsmöglichkeiten für sich nutzen können.\nIndem Sie den Link \"Regelmassig Jobangebote Erhalten\" anklicken, den wir Ihnen unten zur Verfügung gestellt haben und {$TalentNetworkName$} ein paar Updates zur Verfügung stellen, werden Sie E-Mails bekommen sobald eine verfügbare Stelle Ihren Vorgaben und Interessen entspricht. <br /><br />\nWir freuen uns auf einen regen Austausch im {$TalentNetworkName$} Talent Network und hoffen für Sie Ihnen Türen und Möglichkeiten für Ihre Zukunft zu öffnen.\n<br /><br />Vielen Dank,<br />{$TalentNetworkName$}<br /></td></tr></table></body></html>",
            "EmailText": "Sehr geehrter Arbeitssuchender, wie wir sehen konnten, haben Sie sich dafür interessiert {$TalentNetworkName$} beizutreten.\nIn der Vergangenheit haben Sie sich für eine Stelle beworben und wir wollen sicher gehen, dass {$TalentNetworkName$} Sie nicht aus den Augen verliert.\nDiese E-Mail dient dazu, dass Sie und {$TalentNetworkName$} Talent Network weiterhin im regen Austausch bleiben, so dass Sie weiterhin Arbeitsmöglichkeiten für sich nutzen können.\nIndem Sie den Link \"Regelmassig Jobangebote Erhalten\" anklicken, den wir Ihnen unten zur Verfügung gestellt haben und {$TalentNetworkName$} ein paar Updates zur Verfügung stellen, werden Sie E-Mails bekommen sobald eine verfügbare Stelle Ihren Vorgaben und Interessen entspricht. \nWir freuen uns auf einen regen Austausch im {$TalentNetworkName$} Talent Network und hoffen für Sie Ihnen Türen und Möglichkeiten für Ihre Zukunft zu öffnen.\nVielen Dank,\n\n{$TalentNetworkName$}",
            "JoinButtonColor": "ff6600",
            "JoinButtonTextColor": "ffffff",
            "JoinButtonText": "REGELMÄSSIG JOBANGEBOTE ERHALTEN"
        }
    },
    {
        "language": "ESSpanish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "ESSpanish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "¡Bienvenido a nuestro Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Bienvenido {$FirstName$},<br />\n<br />Felicidades por dar el primer paso para encontrar un nuevo empleo con {$TalentNetworkName$}. Continuaremos ayudándote  a encontrar tu empleo ideal enviándote alertas de empleo que encajen con tu perfil.<br />\n<br />Aquí tienes algunas ofertas de empleo disponibles para que puedas enviarles tu CV hoy mismo:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Hola {$FirstName$},<br /> <br />¡Bienvenido y gracias por unirte al Talent Network de {$TalentNetworkName$}! Te animamos a que estés al día de las últimas oportunidades laborales de nuestra empresa visitando a menudo {$TNLinkNoSiteID$} dado que publicaremos ofertas de empleo nuevas habitualmente. También te mandaremos ofertas de empleo de {$TalentNetworkName$} que te puedan interesar según tu perfil. <br /><br />Te deseamos Buena suerte en tu búsqueda y gracias de nuevo por unirte al Talent Network de {$TalentNetworkName$}. Esperamos tener noticias tuyas muy pronto<br /> <br />El equipo de Talent Network de {$TalentNetworkName$} <br />"
        }
    },
    {
        "language": "ESSpanish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} tiene ofertas de empleo que ",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hola {$FirstName$}, <br /><br />Aquí tienes algunas ofertas de empleo de <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> que podrían interesarte. Publicamos ofertas de empeo habitaulmente y te las enviaremos por email si tenemos algo que pueda interesarte. <br /><br />",
            "JobAlertClosingHTML": "El equipo de Talent Network de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "ESSpanish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Ofertas de empleo en {$JobsNearYouLocation$} de {$",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hola {$FirstName$}, <br /><br />Gracias port u interés en <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  Queríamos mostrarte las siguientes ofertas de empleo cerca de {$JobsNearYouLocation$} en caso de que puedan resultar interesantes para ti o para alguien cercano.<br /><br />",
            "JobsNearYouClosingHTML": "Muchas gracias,<br /><br /> El equipo de Talent Network de {$TalentNetworkName$} <br /><br /><br />"
        }
    },
    {
        "language": "ESSpanish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Más ofertas de empleo en {$TalentNetworkName$} sim",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hola {$FullName$}, <br /><br />Gracias por tu interés en nuestra oferta de empleo de {$JobTitle$} en {$TalentNetworkName$}. Estas son otras ofertas similares que pueden interesarte: <br /><br />",
            "AfterApplyClosingHTML": "Muchas gracias,<br /><br /> El equipo de Talent Network de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "FRFrench",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "FRFrench",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bienvenue sur le Talent Network {$TalentNetworkName$}",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "Bonjour {$FirstName$}, \n<br />\n<br />\nBienvenue et merci d’avoir rejoint notre Talent Network {$TalentNetworkName$} !\n<br />\n<br />\nFaire partie  du Talent Network {$TalentNetworkName$}  vous donne accès à l’ensemble de nos offres mais également à toutes les informations nous concernant.\n<br />\n<br />\nNous espérons que cet espace répondra à vos attentes.\n<br />\n<br /> \nL’équipe recrutement\n<br />\n<br /><html><body><table><tr><td style=\"width:598px; font-family: arial, sans-serif; font-size:11px;\">{$HTMLJobList$}<br />{$HTMLViewAllJobs$}</td></tr></table></body></html>",
            "WelcomeText": "Bonjour {$FirstName$},\n \nBienvenue et merci d’avoir rejoint notre Talent Network {$TalentNetworkName$} !\n \nFaire partie  du Talent Network {$TalentNetworkName$}  vous donne accès à l’ensemble de nos offres mais également à toutes les informations nous concernant.\n \nNous espérons que cet espace répondra à vos attentes.\n \nL’équipe recrutement"
        }
    },
    {
        "language": "FRFrench",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "Consultez des offres similaires chez {$TalentNetworkName$}",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Bonjour {$FirstName$}, \n<br />\n<br />\nNous vous remercions d’avoir récemment postulé chez {$TalentNetworkName$}. \n<br />\n<br />\nVous trouverez ci-dessous d’autres offres similaires : \n<br />\n<br />",
            "JobAlertClosingHTML": "<br />\nCordialement,\n<br />\n<br /> \nL’équipe recrutement \n<br />\n<br />"
        }
    },
    {
        "language": "FRFrench",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Consultez des offres similaires chez {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Bonjour  {$FirstName$},\n<br />\n<br /> \nNous vous remercions d’avoir rejoint notre Talent Network {$TalentNetworkName$}.\n<br />\n<br /> \nNous souhaiterions vous faire part des opportunités suivantes près de : {$JobsNearYouLocation$} :\n<br />\n<br />",
            "JobsNearYouClosingHTML": "<br /> \nCordialement,\n<br /> \n<br />  \nL’équipe recrutement\n<br /> \n<br />"
        }
    },
    {
        "language": "FRFrench",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Bonjour {$FirstName$},<br /><br /> \n\nNous vous remercions de votre intérêt pour le poste de {$JobTitle$}. \n<br /><br /> \n\nVoici d'autres offres d’emploi similaires auxquelles vous pouvez postuler :",
            "AfterApplyClosingHTML": "Merci <br /> <br />L’équipe {$TalentNetworkName$}"
        }
    },
    {
        "language": "GRGreek",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "GRGreek",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Καλώς ήρθατε στο Δίκτυο Ταλέντων μας!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br /> Καλώς ήρθατε {$FirstName$},<br />\n<br /> Η αναζήτηση της ιδανικής θέσης εργασίας δεν εύκολη υπόθεση και είμαστε ιδιαίτερα ευτυχείς για το ενδιαφέρον που δείχνετε για τις θέσεις εργασίας  στην εταιρία  {$TalentNetworkName$}. \nΘα προσπαθήσουμε να κάνουμε την αναζήτησή σας ευκολότερη προτείνοντάς σας νέες θέσεις εργασίας που ταιριάζουν στα τρέχοντα ενδιαφέροντά σας, αμέσως μόλις αυτές προκύψουν.<br />\n<br /> Στο μεταξύ, μπορείτε να ξεκινήσετε την αναζήτησή σας άμεσα με τις διαθέσιμες ευκαιρίες απασχόλησης!\n <br />\n<br />\n<hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Καλώς ήρθατε στο Δίκτυο Ταλέντων μας!\nΚαλώς ήρθατε,\nΗ αναζήτηση της ιδανικής θέσης εργασίας δεν εύκολη υπόθεση και είμαστε ιδιαίτερα ευτυχείς για το ενδιαφέρον που δείχνετε για τις θέσεις εργασίας  στην εταιρία {$TalentNetworkName$}.\nΘα προσπαθήσουμε να κάνουμε την αναζήτησή σας ευκολότερη προτείνοντάς σας νέες θέσεις εργασίας που ταιριάζουν στα τρέχοντα ενδιαφέροντά σας, αμέσως μόλις αυτές προκύψουν.\nΣτο μεταξύ, μπορείτε να ξεκινήσετε την αναζήτησή σας άμεσα με τις διαθέσιμες ευκαιρίες απασχόλησης!\n"
        }
    },
    {
        "language": "GRGreek",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "Η εταιρία {$TalentNetworkName$} έχει θέσεις εργασίας που μπορεί να σας ενδιαφέρουν",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Γεια σου {$FirstName$}, \n<br />\n<br />\nΣτη συνέχεια θα δεις ορισμένες θέσεις εργασίας που μπορεί να σε ενδιαφέρουν από την εταιρία <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  Θα ελέγχουμε συχνά για νέες θέσεις εργασίας που σου ταιριάζουν και θα σε ενημερώνουμε με email.<br /><br />\n",
            "JobAlertClosingHTML": "Ευχαριστούμε,\n<br />\n<br /> Η Ομάδα της {$TalentNetworkName$}<br /><br />\n"
        }
    },
    {
        "language": "GRGreek",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Θέσεις Εργασίας στην περιοχή {$JobsNearYouLocation$} από την εταιρία {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Γειά σου {$FirstName$}, \n<br />\n<br /> Σε ευχαριστούμε που εξέφρασες το ενδιαφέρον σου για συνεργασία με την εταιρία <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  Θα θέλαμε να σε ενημερώσουμε για τις ακόλουθες ευκαιρίες εργασίας  στην περιοχή σου, σε περίπτωση που ενδιαφέρουν εσένα ή θα ήθελες να τις συστήσεις κάποιον.<br /><br />\n\n",
            "JobsNearYouClosingHTML": "Ευχαριστούμε,<br />\n<br /> Η Ομάδα της {$TalentNetworkName$} <br /><br /><br />\n\n"
        }
    },
    {
        "language": "GRGreek",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Περισσότερες Θέσεις Εργασίας στην εταιρία {$TalentNetworkName$} όπως  {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Γειά σου {$FullName$},\n <br />\n<br />\nΣε ευχαριστούμε για το πρόσφατο ενδιαφέρον σου για τη θέση εργασίας {$JobTitle$} στην {$TalentNetworkName$}. Στη συνέχεια υπάρχουν παρόμοιες θέσεις εργασίας: <br /><br />\n\n",
            "AfterApplyClosingHTML": "Ευχαριστούμε,<br />\n<br />\nΗ Ομάδα της {$TalentNetworkName$} <br /><br />\n"
        }
    },
    {
        "language": "I1Bahasa",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "I1Bahasa",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Selamat datang di Jaringan Talent kami!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Selamat datang {$FirstName$},<br />\n<br />Selamat Anda telah satu langkah lebih dekat dengan pekerjaan baru di {$TalentNetworkName$}. Kami akan terus mencoba dan membantu Anda mendapatkan posisi yang ideal dengan mengirimkan lowongan pekerjaan yang sesuai dengan keinginan Anda.<br />\n<br />Dibawah ini adalah beberapa lowongan untuk memulai hari Anda:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "language": "ITItalian",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "ITItalian",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Benvenuto nel nostro Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<!DOCTYPE HTML PUBLIC \"-//W3C//DTD HTML 4.0 Transitional//EN\"><html><body><table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;'><br />Ciao {$FirstName$},<br /><br />Benvenuta e grazie per essere diventato/a un membro del Talent Network {$TalentNetworkName$}! Ti esortiamo a continuare a riporre il tuo interesse nella nostra azienda e nelle opportunità di carriera all’interno del nostro settore visitando il sito <a href=\"{$TNLinkWithSiteID$}\">{$TNLinkNoSiteID$}</a> spesso, poiché le posizioni che ricerchiamo sono aggiornate regolarmente. Ti terremo informato/a inoltre su nuove opportunità professionali in {$TalentNetworkName$} che sono in linea con i tuoi interessi.<br /><br />Ti facciamo i migliori auguri per la tua ricerca di lavoro e ti ringraziamo nuovamente per essere entrato/a a fare parte del Talent Network di {$TalentNetworkName$}. Speriamo di poterti dire di più della nostra compagnia e di poterti conoscere meglio presto.<br /><br /> Il Team del Talent Network di {$TalentNetworkName$} <br /></td></tr></table></body></html><html><body><table><tr>\n<td style=\"width:598px; font-family: arial, sans-serif; font-size:11px;\">{$HTMLJobList$}<br />{$HTMLViewAllJobs$}</td></tr></table></body></html>",
            "WelcomeText": "Ciao {$FirstName$},\n\nBenvenuta e grazie per essere diventato/a un membro del Talent Network di {$TalentNetworkName$}! Ti esortiamo a continuare a riporre il tuo interesse nella nostra azienda e nelle opportunità di carriera all’interno del nostro settore visitando il sito {$TNLinkWithSiteID$} spesso, poiché le posizioni che ricerchiamo sono aggiornate regolarmente. Ti terremo informato/a inoltre su nuove opportunità professionali in {$TalentNetworkName$} che sono in linea con i tuoi interessi.\n\nTi facciamo i migliori auguri per la tua ricerca di lavoro e ti ringraziamo nuovamente per essere entrato/a a fare parte del Talent Network di{$TalentNetworkName$}. Speriamo di poterti dire di più della nostra compagnia e di poterti conoscere meglio presto.\n\nIl Team del Talent Network di {$TalentNetworkName$}"
        }
    },
    {
        "language": "ITItalian",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FullName$}, ricevi le opportunità di lavoro di {",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Caro {$FullName$}, <br /><br />In quanto membro/a del Talent Network di {$TalentNetworkName$}, ti invieremo offerte di lavoro in linea con il tuo profilo. Per visualizzare un numero maggiore di offerte, accedi all’elenco di posizioni aperte:<a href=\"{$TNLinkWithSiteID$}\">{$TNLinkNoSiteID$}</a><br /><br />",
            "JobAlertClosingHTML": "<br /><br />Grazie,<br />Il Team di {$TalentNetworkName$}<br /><br />"
        }
    },
    {
        "language": "ITItalian",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Lavori vicino {$JobsNearYouLocation$} da {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Salve {$FirstName$}, .<br />.<br />Grazie per avere espresso interesse nelle posizioni di {$TalentNetworkName$}. Ti segnaliamo sotto altre posizioni vicino a {$JobsNearYouLocation$} che potrebbero interessare te o qualcuno che conosci.<br /><br />",
            "JobsNearYouClosingHTML": "Grazie,<br /> <br />Il Team di {$TalentNetworkName$}<br /><br />"
        }
    },
    {
        "language": "ITItalian",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Più annunci per {$TalentNetworkName$} come {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Salve {$FirstName$}, <br/><br />Grazie per l’interesse dimostrato nella nostra posizione per {$JobTitle$} a {$TalentNetworkName$}. Ecco alter posizioni simili:<br /><br />",
            "AfterApplyClosingHTML": "Grazie, <br /><br />{$TalentNetworkName$}"
        }
    },
    {
        "language": "NLDutch",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "NLDutch",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welkom bij onze Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Welkom {$FirstName$},<br />\n<br />Gefeliciteerd met het nemen van de eerste stap naar het vinden van een nieuwe baan bij {$TalentNetworkName$}. We blijven proberen u te helpen uw ideale betrekking te vinden door u vacatures toe te sturen die voldoen aan uw interesses.<br />\n<br />Bij deze een aantal recente vacatures om u vandaag op weg te helpen:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Geachte {$FirstName$},\n\nWelkom en bedankt voor uw aanmelding bij {$TalentNetworkName$} Talent Network!  Wij moedigen u aan om ons bedrijf en de boeiende carrières in onze industrie verder te verkennen door bij ons te kijken op: {$TNLinkWithSiteID$}, waar onze vacatures regelmatig worden geüpdate.  Wij zullen u ook op de hoogte houden van nieuwe uitdagingen bij {$TalentNetworkName$}, die aansluiten op uw interesses.\n\nWij wensen u veel succes in uw zoektocht en nogmaals bedankt voor uw deelname aan {$TalentNetworkName$} Talent Network. Wij kijken ernaar uit u meer te vertellen over onze organisatie en meer over u te weten te komen.\n\n{$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "language": "NLDutch",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FullName$}, bekijk de vacatures va {$TalentNetwo",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Beste {$FullName$}, <br /><br />Als lid van het {$TalentNetworkName$} zullen wij vacatures sturen die bij je profiel passen. Voor meer vacatures kan je onze lijst met huidige openingen bekijken via: <a href=\"{$TNLinkWithSiteID$}\">{$TNLinkNoSiteID$}</a><br /><br />",
            "JobAlertClosingHTML": "<br /><br />Dank je,<br />{$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "NLDutch",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Vacatures in {$JobsNearYouLocation$} bij {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Beste {$FirstName$}, <br /> <br />Hartelijk dank voor uw interesse in werken bij {$TalentNetworkName$}. We wilden de volgende mogelijkheden in de buurt van {$JobsNearYouLocation$} delen met u in het geval dat u of iemand die je kent geïnteresseerd is.<br /><br />",
            "JobsNearYouClosingHTML": "Dank u wel, <br /> <br />{$TalentNetworkName$} team <br /><br />"
        }
    },
    {
        "language": "NLDutch",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Meer vacatures bij {$TalentNetworkName$} als {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hallo {$FirstName$} <br /><br /> Bedankt voor u interesse in onze {$JobTitle$} positie in {$TalentNetworkName$}. Hier zijn nog andere soortgelijke vacatures: <br /><br />",
            "AfterApplyClosingHTML": "Dank U <br /><br />{$TalentNetworkName$} Team"
        }
    },
    {
        "language": "RMArabic",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMArabic",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "مرحبا بكم في شبكة المواهب لدينا!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "مرحباً {$FirstName$}، \n<br />\n<br />\nإليك بعض الوظائف التي قد تكون مهتماً بها في <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}.</a>. نحن نتحقق من الوظائف الجديدة بشكل دوري، وسوف نرسل لك رسالة إلكترونية إذا وجدنا أي وظيفة متطابقة مع اهتماماتك.\n<br />\n<br />\n{$TextJobList$}\n<table style=\"width:570px; padding-bottom:10px; font-family: arial, sans-serif; font-size:11px;\"><tbody><tr> <td style=\"width:400px;\">\n<strong>\nالمسمي الوظيفي \n</strong>\n</td>\n<td style=\"width:168px;\"><strong>\nالموقع\n</strong>\n</td>\n</tr>\n</tbody>\n</table>\n<br />\n<br />\n<a href=\"{$ViewAllJobsLinkText$}\">{$TalentNetworkName$}.</a>\n<br />\n<br />\nشكراً،  \n<br />\nفريق {$TalentNetworkName$}",
            "WelcomeText": "مرحباً {$FirstName$}، \n\nإليك بعض الوظائف التي قد تكون مهتماً بها في {$TalentNetworkName$}. نحن نتحقق من الوظائف الجديدة بشكل دوري، وسوف نرسل لك رسالة إلكترونية إذا وجدنا أي وظيفة متطابقة مع اهتماماتك.\n\n{$TextJobList$}\n\n{$TalentNetworkName$}.\n\nشكراً،  \nفريق {$TalentNetworkName$}"
        }
    },
    {
        "language": "RMEnglish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMEnglish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welcome to our Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Welcome {$FirstName$},<br />\n<br />Searching for your dream job isn't easy and we're thrilled to hear you're interested in jobs at {$TalentNetworkName$}. \nWe'll try and make your search easier by sending you new jobs that match your current interests as they become available.<br />\n<br />In the meantime, get your search started today with these great opportunities!<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Hello {$FirstName$},Welcome and thank you for becoming a member of the {$TalentNetworkName$} Talent Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting {$TNLinkWithSiteID$} often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests. We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Talent Network. We look forward to telling you more about the organization and learning more about you. {$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "talentNetworkType": "CollegeNetwork",
        "language": "RMEnglish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welcome to our College Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<!DOCTYPE HTML PUBLIC \\ -//W3C//DTD HTML 4.0 Transitional//EN\\ >  <html><body><table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;'>  <br/>Hello {$FirstName$},<br/>  <br/>Welcome and thank you for becoming a member of our College Network!    We encourage you to continue exploring your interest in our company and joining our College Network will enhance your job search and application process.   <br /><br />  <li>Show your interest in future employment opportunities with us. </li>  <li>Receive communications and updates from our organization.</li>  <li>Become a part of our talent pool for relevant future jobs.</li>  <br/><br />  We look forward to staying connected with you!<br/>  </td></tr></table></body></html>",
            "WelcomeText": "Hello {$FirstName$},Welcome and thank you for becoming a member of the {$TalentNetworkName$} Talent Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting              {$TNLinkWithSiteID$} often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests.We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Talent Network. We look forward to telling you more about the organization and learning more about you.{$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "talentNetworkType": "EmployeeNetwork",
        "language": "RMEnglish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welcome to our Employee Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "Hello {$FirstName$},<br /> <br />Welcome and thank you for becoming a member of the {$TalentNetworkName$} Employee Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting {$TNLinkNoSiteID$}often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests.<br /><br />We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Employee Network. We look forward to telling you more about the organization and learning more about you.<br /> <br />{$TalentNetworkName$} Employee Network Team <br />",
            "WelcomeText": "Hello {$FirstName$},Welcome and thank you for becoming a member of the {$TalentNetworkName$} Employee Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting {$TNLinkWithSiteID$} often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests. We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Employee Network. We look forward to telling you more about the organization and learning more about you. {$TalentNetworkName$} Employee Network Team"
        }
    },
    {
        "language": "RMEnglish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} has jobs you may be interested in",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hi {$FirstName$}, <br /><br />Here are some jobs you may be interested in from <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We'll check for new positions frequently and send you an email if we find any matches.<br /><br />\n",
            "JobAlertClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />\n"
        }
    },
    {
        "language": "RMEnglish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Jobs near {$JobsNearYouLocation$} from {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hi {$FirstName$}, <br /><br />Thank you for expressing interest in working with <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We wanted to share the following opportunities near {$JobsNearYouLocation$} in case you or someone you know is interested.<br /><br />",
            "JobsNearYouClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br /><br />"
        }
    },
    {
        "language": "RMEnglish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "More Jobs at {$TalentNetworkName$} like {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hi {$FullName$}, <br /><br />Thank you for your recent interest in our {$JobTitle$} position at {$TalentNetworkName$}. Here are other similar jobs: <br /><br />",
            "AfterApplyClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "RMEnglish",
        "field": "EngagementEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "Active": true,
            "TotalMemberThreshold": 300,
            "NewMemberThreshold": 30
        }
    },
    {
        "language": "RMEnglish",
        "field": "InvitationEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": "",
            "SubjectHTML": "Join the {$TalentNetworkName$} Talent Network",
            "EmailHTML": "<!DOCTYPE HTML PUBLIC \\\"-//W3C//DTD HTML 4.0 Transitional//EN\\\"><html><body><table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;'><br />Dear {$CandidateName$},<br /><br />Thank you for your interest in joining the {$TalentNetworkName$}. While you hopefully completed an application for a position with us, we would also like to keep you updated with other similar positions in future.  <br /> <br />By opting to Join our network below you will receive emails from us when a position that matches your interest and is in your area becomes available.<br /><br />We look forward to sharing information on {$TalentNetworkName$} and future opportunities with you.<br /><br />Kind Regards,<br />{$TalentNetworkName$} Talent Network Team<br /></td></tr></table></body></html>",
            "EmailText": "Dear {$CandidateName$},\n\nThank you for your interest in joining the {$TalentNetworkName$}. While you hopefully completed an application for a position with us, we would also like to keep you updated with other similar positions in future.  \n\nBy opting to Join our network below you will receive emails from us when a position that matches your interest and is in your area becomes available.\n\nWe look forward to sharing information on {$TalentNetworkName$} and future opportunities with you.\n\nKind Regards,\n{$TalentNetworkName$} Talent Network Team",
            "JoinButtonColor": "ff6600",
            "JoinButtonTextColor": "ffffff",
            "JoinButtonText": "Join"
        }
    },
    {
        "language": "RMKorean",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMKorean",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "우리의 인재 네트워크에 오신 것을 환영합니다!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<p>안녕하십니까 {$FirstName$}님,</p>\n<p>힐튼 월드와이드의 인재네트워크 가입을 통해 회원이 되셨음을 환영합니다! 힐튼 인재 네트워크에서 주기적으로 제공하는 다양한 채용 정보와 힐튼 및 업계 최신 소식을 접하실 수 있습니다. 또한 여러분의 프로필을 기반으로 가장 적합한 직무와 관심있는 채용 정보 알림을 받으실 수 있습니다.  이 사이트를 수시로 방문 하여 프로필을 업데이트 하시고,  힐튼에 대한 지속적인 관심과 더불어 흥미로운 커리어 기회를 찾으시길 기대합니다. </p>\n<p>다시한번, 힐튼 인재 네트 워크 가입에 깊이 감사드리며 힐튼과 함께 여러분의 멋진 비전과 꿈을 이루어 나가시길 바랍니다.</p>\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>\n",
            "WelcomeText": "환영 {$FirstName$},\n\n당신의 꿈의 직업을 검색하는 것은 쉬운 일이 아닙니다 우리는 당신이 Hilton Grand Vacations 에서의 작업에 관심이 듣고 기쁘게 생각. 우리는 시도하고 당신에게 제공되면 현재의 이익을 일치하는 새로운 작업을 전송하여 검색을 쉽게 할 것이다.\n\n한편, 얻을 귀하의 검색이 중대한 기회를 오늘 시작!"
        }
    },
    {
        "language": "RMKorean",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} 당신이에 관심이있을 수 있습니다 작업이",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "<p>안녕하십니까 {$FirstName$}님,</p>\n<p>힐튼월드와이드에서는 열정과 잠재력을 갖춘 인재를 찾고 있습니다. <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> 님이 관심있어 할 주간 채용 정보를 아래와 같이 보내드립니다. </p>\n<p><a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> 님의 능력과 커리어 개발 목표에 부합하는 포지션에 지원하시길 권하며, 또한 이 채용  정보에 관심을 가질만한 주변의 지인들과 공유하시길 기대합니다. </p>\n<p>감사합니다.</p>",
            "JobAlertClosingHTML": "고맙습니다,<br /><br />{$TalentNetworkName$} 팀<br /><br />"
        }
    },
    {
        "language": "RMKorean",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "에서 {$JobsNearYouLocation$} 근처 채용 {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "안녕하십니까 {$FirstName$} 님,<br />\n<br />\n힐튼 월드와이드의 채용과 커리어 개발에 대한 귀하의 관심에 감사드립니다. <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>. 님이 거주하시는 지역의 최근 채용 정보를 보내드립니다. <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> 님의 능력과 커리어 개발 목표에 부합하는 포지션에 지원하시길 권하며,  또한 이 채용 정보에 관심을 가질만한 주변의 지인들과 공유하시길 기대합니다.<br /><br />감사합니다.<br /><br />힐튼월드와이드 채용팀",
            "JobsNearYouClosingHTML": "고맙습니다, <br /><br />{$TalentNetworkName$} 팀<br /><br /><br />"
        }
    },
    {
        "language": "RMKorean",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "같은 {$TalentNetworkName$}에서 더 많은 일자리 {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "안녕하십니까 {$FullName$} 님, <br /><br />\n{$JobTitle$}에 지원해 주셔서 감사드립니다.  {$TalentNetworkName$} 님의 지원서는 현재 검토 중에 있습니다. 진행 상황의 확인을 원하실 경우, 지원서 파일를 클릭하여 주십시오. {$TalentNetworkName$} 님의 능력과 지원하신 직무의 자격요건이 부합할 경우 채용 담당자가 연락을 드릴 것입니다. 기다리시는 동안, 아래의 인재네트워크 사이트를 방문하여 지원하신 포지션과 유사한 채용 정보를 확인하실 수 있습니다.<br /><br />힐튼 월드와이드의 채용과 커리어 개발에 대한 관심에 감사드립니다.<br /><br />힐튼월드와이드 채용팀",
            "AfterApplyClosingHTML": "고맙습니다,<br /><br />{$TalentNetworkName$} 팀 <br /><br />"
        }
    },
    {
        "language": "RMPortuguese",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMPortuguese",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bem-vindo à nossa Rede de Talentos!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Bem Vindo {$FirstName$},<br />\n<br />Parabéns por dar o primeiro passo na procura de um novo emprego na {$TalentNetworkName$}. Nós continuaremos a tentar ajudá-lo na busca da posição ideal, enviando ofertas de trabalho em aberto que estejam de acordo com os seus interesses.<br />\n<br />Aqui estão algumas oportunidades:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "talentNetworkType": "EmployeeNetwork",
        "language": "RMPortuguese",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bem-vindo à nossa Rede de Talentos!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; ' border='0'>\n<br />Bem Vindo {$FirstName$},<br />\n<br />Parabéns por dar o primeiro passo na procura de um novo emprego na {$TalentNetworkName$}. Nós continuaremos a tentar ajudá-lo na busca da posição ideal, enviando ofertas de trabalho em aberto que estejam de acordo com os seus interesses.<br />\n<br />Aqui estão algumas oportunidades:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Equipe Talent Network de {$TalentNetworkName$}\n<br /><br />"
        }
    },
    {
        "language": "RMPortuguese",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} tem ofertas de emprego",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Olá {$FirstName$}, <br /><br />\nAqui estão algumas vagas da    \n<a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> \nque você pode estar interessado(a). Publicaremos novas ofertas e enviaremos para o seu e-mail se tivermos algo que possa lhe interessar. <br /><br />",
            "JobAlertClosingHTML": "Equipa de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "RMPortuguese",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Mais vagas em {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Olá  {$FullName$}, <br /><br />Obrigado por seu interesse em nossa oferta de trabalho de {$JobTitle$} em \n{$TalentNetworkName$}. Aqui estão ofertas similares que podem lhe interessar:<br /><br />",
            "JobsNearYouClosingHTML": "Muito obrigado,<br /><br /> Equipa de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "RMPortuguese",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Mais vagas em {$TalentNetworkName$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Olá  {$FullName$}, <br /><br />Obrigado por seu interesse em nossa oferta de trabalho de {$JobTitle$} em \n{$TalentNetworkName$}. Aqui estão ofertas similares que podem lhe interessar:<br /><br />",
            "AfterApplyClosingHTML": "Muito obrigado,<br /><br /> A equipe de Talent Network de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "RMSimplifiedChinese",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "",
            "SenderEmail": "",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMSimplifiedChinese",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "欢迎来到我们的人才网！",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />欢迎您 {$FirstName$},<br />\n<br />祝贺你开始了在 {$TalentNetworkName$}。 寻找新工作的第一步。我们会向您发送您感兴趣的职位，帮助您找到理想的工作。<br />\n<br />这里有些职位你现在就可以申请：<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "language": "RMSimplifiedChinese",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FullName$}, 查看我们从{$TalentNetworkName$}为您推荐的职位",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "亲爱的{$FullName$}, <br /><br />作为{$TalentNetworkName$}人才网络的成员，我们将向您推荐符合您个人条件的工作职位。如果需要了解更多就业机会，请搜索我们的当前职位空缺列表：{$TNLinkNoSiteID$}<br /><br />{$HTMLJobList$}",
            "JobAlertClosingHTML": "谢谢！<br /> <br />{$TalentNetworkName$} Team. <br />"
        }
    },
    {
        "language": "RMSimplifiedChinese",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "{$JobsNearYouLocation$}热门招聘，{$TalentNetworkName$}最",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "{$FirstName$}, 您好! <br /> <br />感谢您对{$TalentNetworkName$}的关注！您可能还会对{$JobsNearYouLocation$}其他的工作机会感兴趣，相关职位如下:<br /><br />",
            "JobsNearYouClosingHTML": "谢谢！<br /> <br />{$TalentNetworkName$} Team. <br />"
        }
    },
    {
        "language": "RMSimplifiedChinese",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "{$TalentNetworkName$}{$JobTitle$}相关职位招聘",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "{$FirstName$}您好, <br /><br />感谢您投递我们在{$TalentNetworkName$}的{$JobTitle$}职位，以下是更多相关职位：<br /><br / >",
            "AfterApplyClosingHTML": "谢谢, <br /><br />{$TalentNetworkName$}"
        }
    },
    {
        "language": "RMSouthAmPortuguese",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMSouthAmPortuguese",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bem-vindo à nossa Rede de Talentos!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Bem Vindo {$FirstName$},<br />\n<br />Parabéns por dar o primeiro passo na procura de um novo emprego na {$TalentNetworkName$}. Nós continuaremos a tentar ajudá-lo na busca da posição ideal, enviando ofertas de trabalho em aberto que estejam de acordo com os seus interesses.<br />\n<br />Aqui estão algumas oportunidades:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "language": "RMSouthAmPortuguese",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} tem ofertas de emprego ",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Olá {$FirstName$}, <br /><br />\nAqui estão algumas vagas da    \n<a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a> \nque você pode estar interessado(a). Publicaremos novas ofertas e enviaremos para o seu e-mail se tivermos algo que possa lhe interessar. <br /><br />",
            "JobAlertClosingHTML": "Equipe Talent Network {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "RMSouthAmPortuguese",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Mais vagas em {$TalentNetworkName$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Olá  {$FullName$}, <br /><br />Obrigado por seu interesse em nossa oferta de trabalho de {$JobTitle$} em \n{$TalentNetworkName$}. Aqui estão ofertas similares que podem lhe interessar:<br /><br />",
            "AfterApplyClosingHTML": "Muito obrigado,<br /><br /> A equipe de Talent Network de {$TalentNetworkName$} <br /><br />"
        }
    },
    {
        "language": "RMSouthAmSpanish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMSouthAmSpanish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "¡Bienvenido a nuestro Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Bienvenido {$FirstName$},<br />\n<br />Felicidades por dar el primer paso para encontrar un nuevo empleo con {$TalentNetworkName$}. Continuaremos ayudándote  a encontrar tu empleo ideal enviándote alertas de empleo que encajen con tu perfil.<br />\n<br />Aquí tienes algunas ofertas de empleo disponibles para que puedas enviarles tu CV hoy mismo:<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Bienvenido {$FirstName$},\nFelicidades por dar el primer paso para encontrar un nuevo empleo con {$TalentNetworkName$}. Continuaremos ayudándote  a encontrar tu empleo ideal enviándote alertas de empleo que encajen con tu perfil. \nAquí tienes algunas ofertas de empleo disponibles para que puedas enviarles tu CV hoy mismo:\n"
        }
    },
    {
        "language": "RMTurkish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "[TalentNetwork] Talent Network",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "RMTurkish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bizim Yetenek Ağına Hoşgeldiniz!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Karşılama {$FirstName$},<br />\n<br />Hayalinizdeki iş aranıyor kolay değildir ve biz de iş ilgileniyorsanız duymak heyecan duyuyoruz {$TalentNetworkName$}. \nBiz denemek ve hazır olduklarında mevcut ilgi alanlarınıza uygun yeni iş göndererek arama kolaylaştırmak gerekir.<br />\n<br />Bu arada, olsun arama, bu büyük fırsatlar ile bugün başladı!<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "talentNetworkType": "EmployeeNetwork",
        "language": "RMTurkish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Bizim Yetenek Ağına Hoşgeldiniz!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Karşılama {$FirstName$},<br />\n<br />Hayalinizdeki iş aranıyor kolay değildir ve biz de iş ilgileniyorsanız duymak heyecan duyuyoruz {$TalentNetworkName$}. \nBiz denemek ve hazır olduklarında mevcut ilgi alanlarınıza uygun yeni iş göndererek arama kolaylaştırmak gerekir.<br />\n<br />Bu arada, olsun arama, bu büyük fırsatlar ile bugün başladı!<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": ""
        }
    },
    {
        "language": "RMTurkish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} Eğer ilginizi çekebilir işler vardır",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Merhaba {$FirstName$}, <br /><br />Burada <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>'ndan gelen ilginizi çekebilecek bazı işler mevcut. Yeni pozisyonları sık sık kontrol edecek ve size uygun bir pozisyon bulursak e-posta yoluyla bilgi vereceğiz.\n<br /><br />",
            "JobAlertClosingHTML": "Teşekkür ederim,<br /><br />{$TalentNetworkName$} Takım<br /><br />"
        }
    },
    {
        "language": "RMTurkish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "İşler yakın {$JobsNearYouLocation$} itibaren {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Merhaba {$FirstName$}, <br /><br />{$TalentNetworkName$} ile çalışma konusunda gösterdiğiniz ilgiden dolayı teşekkür ederiz. Sizin veya bir tanıdığınızın ilgisini çekebilecek, {$JobsNearYouLocation$} yakınındaki şu fırsatları sizinle paylaşmak istedik.\n",
            "JobsNearYouClosingHTML": "Teşekkür ederim,<br /><br />{$TalentNetworkName$} \nTakım<br /><br /><br />"
        }
    },
    {
        "language": "RMTurkish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Daha fazlası İşler {$TalentNetworkName$} sevmek {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Merhaba {$FullName$}, <br /><br />Sizin son ilgiden dolayı teşekkür ederiz bizim {$JobTitle$} at pozisyonu {$TalentNetworkName$}. İşte diğer benzer işler şunlardır: <br /><br />",
            "AfterApplyClosingHTML": "Teşekkür ederim,<br /><br />{$TalentNetworkName$} Takım<br /><br />"
        }
    },
    {
        "language": "SESwedish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "SESwedish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Välkommen till vårt TalentNetwork",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Hej {$FirstName$},<br /><br />Välkommen som medlem i {$TalentNetworkName$} Talent Network! Vi ser fram emot att skicka dig tips på nya lediga tjänster baserade på din profil hos oss.<br /><br />Nedan finner du jobb som matchar din profil:<br />\n\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Välkommen som medlem i {$TalentNetworkName$} Talent Network! Vi ser fram emot att skicka dig tips på nya lediga tjänster baserade på din profil hos oss.\n\nNedan finner du jobb som matchar din profil:"
        }
    },
    {
        "talentNetworkType": "EmployeeNetwork",
        "language": "SESwedish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Välkommen till vårt interna Talent Network",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Hej {$FirstName$},<br /><br />Välkommen som medlem i {$TalentNetworkName$} interna Talent Network! Vi ser fram emot att skicka dig tips på nya lediga tjänster baserade på din profil hos oss.<br /><br />Nedan finner du jobb som matchar din profil:<br />\n\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Välkommen som medlem i {$TalentNetworkName$} interna Talent Network! Vi ser fram emot att skicka dig tips på nya lediga tjänster baserade på din profil hos oss.\n\nNedan finner du jobb som matchar din profil:"
        }
    },
    {
        "language": "SESwedish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$FirstName$}, se våra nya lediga jobb",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hej {$FirstName$},\n</br>\n</br>\nDå du är medlem i {$TalentNetworkName$} Talent Network, vill vi gärna skicka dig jobb som matchar din profil.\n</br>\n</br>\nFör att se fler lediga tjänster vänligen besök vår Talent Network: {$TNLinkNoSiteID$}\n",
            "JobAlertClosingHTML": "&#60;&#47;br&#62;\n&#60;&#47;br&#62;\nMed vänlig hälsning,\n{$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "language": "SESwedish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "{$TalentNetworkName$} har lediga tjänster som kan ",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hej {$FirstName$}, \n</br>\n</br>\nHär kommer ett par lediga tjänsten som kan intressera dig från {$TalentNetworkName$}. Vi kollar regelbundet efter tjänster som matchar din profil och skickar dessa via e-mail till dig.\n</br>",
            "JobsNearYouClosingHTML": "Med vänlig hälsning,&#60;&#47;br&#62;\n{$TalentNetworkName$}"
        }
    },
    {
        "language": "SESwedish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "Fler jobbmöjligheter hos {$TalentNetworkName$} lik",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hej {$FirstName$},\n<br />\n<br />\nTack för ditt visade intresse för tjänsten hos {$TalentNetworkName$}. \n<br />Här kommer fler liknande jobb:",
            "AfterApplyClosingHTML": "Fler jobbmöjligheter hos {$TalentNetworkName$} liknande {$JobTitle$}"
        }
    },
    {
        "language": "SESwedish",
        "field": "InvitationEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": " ",
            "FooterImageURL": " ",
            "SubjectHTML": "Gå med i  {$TalentNetworkName$} Talent Network",
            "EmailHTML": "<!DOCTYPE HTML PUBLIC \\\"-//W3C//DTD HTML 4.0 Transitional//EN\\\"><html><body><table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;'><br />Hej {CandidateName},<br /><br />Vad roligt att du är intresserad av våra lediga jobb! Vi hoppas att du har skickat in en ansökan till oss redan och vi skulle även gärna vilja hålla kontakten med dig framöver för att rekommendera liknande jobb.  <br /> <br />Om du blir medlem i vårt Talent Network så skickar vi ett mail till dig när nya, liknande jobb i ditt område dyker upp.<br /><br />Vi ser fram emot att få hålla dig informerad om {TalentNetworkName} och våra lediga jobb.<br /><br />Vänliga hälsningar,<br />{$TalentNetworkName$}<br /></td></tr></table></body></html>",
            "EmailText": "Hej {CandidateName},\n\nVad roligt att du är intresserad av våra lediga jobb! Vi hoppas att du har skickat in en ansökan till oss redan och vi skulle även gärna vilja hålla kontakten med dig framöver för att rekommendera liknande jobb. \n\nOm du blir medlem i vårt Talent Network så skickar vi ett mail till dig när nya, liknande jobb i ditt område dyker upp.\n\nVi ser fram emot att få hålla dig informerad om {TalentNetworkName} och våra lediga jobb.\n\nVänliga hälsningar,\n{$TalentNetworkName$}\n",
            "JoinButtonColor": "ff6600",
            "JoinButtonTextColor": "ffffff",
            "JoinButtonText": "Bli medlem"
        }
    },
    {
        "language": "UKEnglish",
        "field": "General",
        "didPrefix": "EB",
        "defaultValue": {
            "SenderName": "talentnetwork@jobs.net",
            "SenderEmail": "talentnetwork@jobs.net",
            "HeaderImageURL": "",
            "FooterImageURL": ""
        }
    },
    {
        "talentNetworkType": "TalentNetwork",
        "language": "UKEnglish",
        "field": "WelcomeEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "WelcomeSubject": "Welcome to our Talent Network!",
            "SendWelcomeEmail": true,
            "WelcomeHTML": "<table><tr><td style='width:598px; font-family: arial, sans-serif; font-size:11px;' border='0'>\n<br />Welcome {$FirstName$},<br />\n<br />Searching for your dream job isn't easy and we're thrilled to hear you''re interested in jobs at {$TalentNetworkName$}. \nWe'll try and make your search easier by sending you new jobs that match your current interests as they become available.<br />\n<br />In the meantime, get your search started today with these great opportunities!<br />\n<br /><hr style='margin:0;'>{$HTMLJobList$}<br />\n</td></tr>\n{$HTMLViewAllJobs$}\n</table>",
            "WelcomeText": "Hello {$FirstName$},Welcome and thank you for becoming a member of the {$TalentNetworkName$} Talent Network! We encourage you to continue exploring your interest in our company and the exciting careers within our industry by visiting {$TNLinkWithSiteID$} often, as we update our list of open positions on a regular basis. We will also notify you of great opportunities at {$TalentNetworkName$} that match your interests. We wish you best of luck in your search and thanks again for joining the {$TalentNetworkName$} Talent Network. We look forward to telling you more about the organization and learning more about you. {$TalentNetworkName$} Talent Network Team"
        }
    },
    {
        "language": "UKEnglish",
        "field": "JobAlertEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobAlertSubject": "{$TalentNetworkName$} has jobs you may be interested in",
            "SendJobAlertEmail": true,
            "JobAlertWelcomeHTML": "Hi {$FirstName$}, <br /><br />Here are some jobs you may be interested in from <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We'll check for new positions frequently and send you an email if we find any matches.<br /><br />",
            "JobAlertClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />"
        }
    },
    {
        "language": "UKEnglish",
        "field": "JobsNearYouEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "JobsNearYouSubject": "Jobs near {$JobsNearYouLocation$} from {$TalentNetworkName$}",
            "SendJobsNearYouEmail": true,
            "JobsNearYouWelcomeHTML": "Hi {$FirstName$}, <br /><br />Thank you for expressing interest in working with <a href=\"{$TNLinkWithSiteID$}\">{$TalentNetworkName$}</a>.  We wanted to share the following opportunities near {$JobsNearYouLocation$} in case you or someone you know is interested.<br /><br />",
            "JobsNearYouClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br /><br />"
        }
    },
    {
        "language": "UKEnglish",
        "field": "AfterApplyEmail",
        "didPrefix": "EB",
        "defaultValue": {
            "AfterApplySubject": "More Jobs at {$TalentNetworkName$} like {$JobTitle$}",
            "SendAfterApplyEmail": true,
            "AfterApplyWelcomeHTML": "Hi {$FullName$}, <br /><br />Thank you for your recent interest in our {$JobTitle$} position at {$TalentNetworkName$}. Here are other similar jobs: <br /><br />",
            "AfterApplyClosingHTML": "Thank you,<br /><br />{$TalentNetworkName$} Team<br /><br />"
        }
    }
];
  res.json(emails);
})
