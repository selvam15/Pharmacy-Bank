function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);

    const voices = window.speechSynthesis.getVoices(); 

    const selectedVoice = voices.find(voice => voice.name.includes('Google UK English Female') || voice.name.includes('English'));

    if (selectedVoice) {
        text_speak.voice = selectedVoice; 
    }

    text_speak.rate = 2.2; 
    text_speak.volume = 1; 
    text_speak.pitch = 0;  
    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning ...,  How can i help you")
    }

    else if(hour>12 && hour<17){
        speak("Good Afternoon...,  How can i help you")
    }

    else{
        speak("Good Evenining ...")
        speak("How can i help you")
        
    }

}

window.addEventListener('load', ()=>{
    speak("Welcome to Pharmacy bank");
    wishMe();
});



$(document).ready(function(){
    // Sticky navbar on scroll
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }

        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });

    
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });



});

$(document).ready(function(){
    if(localStorage.getItem('profileImage')){
        $('.profile-img').attr('src', localStorage.getItem('profileImage'));
    }

    $('#profile-pic').change(function(){
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(event){
                const imageSrc = event.target.result;
                $('.profile-img').attr('src', imageSrc);
                localStorage.setItem('profileImage', imageSrc);
            };
            reader.readAsDataURL(file);
        }
    });

    
    $('.profile-border').click(function(){
        $('#profile-pic').click();
    });
});




    var typed = new Typed(".typing", {
        strings: ["Drug Description", "Drug Indications", "Drug SideEffects"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Drug Description", "Drug Indications", "Drug SideEffects"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });


//selvam js for drug data base

const drugs = [
    {
        name: "Paracetamol",
        description: "Paracetamol is used to treat mild to moderate pain and reduce fever.",
        indications: "Pain relief, fever reduction.",
        symptoms: "Headache, muscle pain, arthritis pain, cold symptoms.",
        sideEffects: "Rare side effects include liver damage in high doses.",
        dosage: "500 mg every 4-6 hours as needed. Max 4g per day.",
        warnings: "Avoid excessive use to prevent liver damage.",
        pregnancyWarning: "Generally considered safe during pregnancy.",
        childrenWarning: "Safe for children under doctor's supervision.",
        productLink: "https://pharmeasy.in/online-medicine-order/paracip-500mg-tablet-6879?pincode=400078",
        productprice:" ₹8.25 per strip",
        atcCodes: ["N02BE01"],
        products: ["Tylenol", "Panadol"],
        smiles: "CC(=O)NC1=CC=C(O)C=C1",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/011/795/766/original/paracetamol-or-acetaminophen-chemical-structure-skeletal-formula-on-white-background-vector.jpg"
    },
    {
        name: "Ibuprofen",
        description: "Ibuprofen is a nonsteroidal anti-inflammatory drug (NSAID) used to treat pain, inflammation, and fever.",
        indications: "Pain relief, inflammation reduction, fever.",
        symptoms: "Headache, toothache, arthritis, menstrual pain.",
        sideEffects: "Possible stomach upset, ulcers, and kidney damage with long-term use.",
        dosage: "200-400 mg every 4-6 hours as needed.",
        warnings: "Use with caution if you have stomach or kidney issues.",
        pregnancyWarning: "Not recommended during the third trimester of pregnancy.",
        childrenWarning: "Safe for children under doctor's supervision.",
        productLink: "https://www.google.com/url?url=https://www.loyalmedicosonline.com/products/brufen-400-15/1083368000002371487%3Fsrsltid%3DAfmBOooust1x1CjD3_4txGw0uxsNH2Ru6cSeXCsaNdODs6_Ir39A6Sd9YCI&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwi6uKSVgKuIAxWVcGwGHbozMcIQgOUECNMG&usg=AOvVaw1dzE41HnmLohZnsXPfhGOn",
        productprice:"₹18.33",
        atcCodes: ["M01AE01"],
        products: ["Advil", "Motrin"],
        smiles: "CC(C)CC1=CC=C(C=C1)C(C)C(=O)O",
        imageUrl: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=3672&t=l"
    },
    {
        name: "Cetirizine",
        description: "Cetirizine is an antihistamine used to relieve allergy symptoms.",
        indications: "Allergic rhinitis, urticaria (hives).",
        symptoms: "Sneezing, runny nose, itching, watery eyes.",
        sideEffects: "Drowsiness, dry mouth.",
        dosage: "10 mg once daily.",
        warnings: "Use with caution in patients with kidney problems.",
        pregnancyWarning: "Consult your doctor before use during pregnancy.",
        childrenWarning: "Safe for children 6 years and older.",
        productLink: "https://www.google.com/url?url=https://www.pasumaipharmacy.com/product/cz-3-tablet_14329%3Fsrsltid%3DAfmBOooFff3qSNgAT58mzDBbzeazt86pTlkumlrZtMsmo_IZk3L6LWRpzCY&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwjPlKLRgKuIAxWWR2wGHVBcC-YQgOUECO0F&usg=AOvVaw0VzqZ9E5vwDgY7miwn_9Bn",
        productprice:"₹17.90",
        atcCodes: ["R06AE07"],
        products: ["Zyrtec"],
        smiles: "C1CN(CCC1C2=CC=CC=C2)CC(C3=CC=CC=C3)O",
        imageUrl: "https://www.researchgate.net/publication/258703936/figure/fig1/AS:202501618966531@1425291556323/Chemical-structure-of-cetirizine.png"
    },
    {
        name: "Aspirin",
        description: "Aspirin is a salicylate used to reduce fever, pain, and inflammation.",
        indications: "Pain relief, fever, heart attack and stroke prevention.",
        symptoms: "Pain, inflammation, fever, risk of heart disease.",
        sideEffects: "Stomach ulcers, bleeding, tinnitus at high doses.",
        dosage: "325-650 mg every 4-6 hours for pain. Low dose (81 mg) for heart protection.",
        warnings: "Avoid in children with viral infections due to risk of Reye's syndrome.",
        pregnancyWarning: "Avoid during pregnancy unless prescribed by a doctor.",
        childrenWarning: "Not recommended for children with viral infections.",
        productLink: "https://www.google.com/url?url=https://www.medplusmart.com/product/rosycap-asp-10-75mg-cap_rosy0010%3Fsrsltid%3DAfmBOoqj1a-Gt1L4r0TuH_Z4gYvoKqpuBvS88DubwmPt3v-pJlI_Lmz3QUk&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwiJjeLsgKuIAxWWR2wGHVBcC-YQgOUECKII&usg=AOvVaw1-3ESBjSg6Z6A8c3qKrKBy",
        productprice:"₹101.04",
        atcCodes: ["B01AC06", "N02BA01"],
        products: ["Bayer Aspirin"],
        smiles: "CC(=O)OC1=CC=CC=C1C(=O)O",
        imageUrl: "https://static.vecteezy.com/system/resources/previews/011/795/768/original/acetylsalicylic-acid-aspirin-drug-molecule-skeletal-formula-on-white-background-vector.jpg"
    },
    {
        name: "Ciprofloxacin",
        description: "Ciprofloxacin is an antibiotic used to treat various bacterial infections.",
        indications: "Urinary tract infections, respiratory infections, skin infections.",
        symptoms: "Bacterial infections.",
        sideEffects: "Nausea, diarrhea, tendon damage.",
        dosage: "250-750 mg every 12 hours for 7-14 days.",
        warnings: "May cause tendon damage, especially in older adults.",
        pregnancyWarning: "Avoid use during pregnancy unless necessary.",
        childrenWarning: "Not recommended for children under 18 unless absolutely necessary.",
        productLink: "https://www.google.com/url?url=https://allschoolabs.com/product/ciflomax-ciprofloxacin-500mg-x10/%3Fsrsltid%3DAfmBOorI488PxlHqxB_Qh-F75tEpPOyExO2LHI3XAVcWpd67Adwy2aD1FNA%26com_cvv%3Dd30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwirvviDgauIAxW-SGcHHdGjFuAQgOUECOkG&usg=AOvVaw1asAK9n85juIFsBqkCEYOk",
        productprice:"₹65",
        atcCodes: ["J01MA02"],
        products: ["Cipro"],
        smiles: "C1CC1N2C=C(C(=O)C3=CC=CC=C32)N4CCOCC4",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGVqRtTAaA-ojnigWpXdXlo1_Mts23IETUsA&s"
    },
    {
        name: "Dextromethorphan",
        description: "Dextromethorphan is a cough suppressant used to treat a dry cough.",
        indications: "Dry cough, throat irritation.",
        symptoms: "Non-productive cough.",
        sideEffects: "Drowsiness, dizziness.",
        dosage: "10-20 mg every 4 hours as needed.",
        warnings: "Avoid using with MAO inhibitors.",
        pregnancyWarning: "Consult your doctor before use during pregnancy.",
        childrenWarning: "Safe for children over 4 years old.",
        productLink: "https://www.google.com/url?url=https://www.secondmedic.com/app/view-product/corex-dx-syp-50ml&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwi79MmXgauIAxXbV2wGHXNbIzoQgOUECPsG&usg=AOvVaw1ySmWNmrMMFmURThzpUeB1",
        productprice:"₹85",
        atcCodes: ["R05DA09"],
        products: ["Robitussin", "Delsym"],
        smiles: "C1C2CCC3=CC(=O)C=C(C3=C2C1)N4CCC5=CC=CC=C54",
        imageUrl: "https://pubchem.ncbi.nlm.nih.gov/image/imgsrv.fcgi?cid=5360696&t=l"
    },
    {
        name: "Metformin",
        description: "Metformin is an oral diabetes medicine that helps control blood sugar levels.",
        indications: "Type 2 diabetes.",
        symptoms: "High blood sugar levels.",
        sideEffects: "Nausea, vomiting, diarrhea.",
        dosage: "500-850 mg once or twice daily.",
        warnings: "Avoid in patients with severe kidney problems.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Not recommended for children under 10 years.",
        productLink: "https://www.google.com/url?url=https://egmedi.com/category/prescriptions-drugs/maxformin-750-tablet-pr%3Fsrsltid%3DAfmBOorTzxJonwSs4tzWaeN1qNrcm77Bn2P-ndxe9Fz_RsTV_rs4Ipi7liI%26com_cvv%3Dd30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwir2JqngauIAxWFTWwGHU4aNnAQgOUECKIG&usg=AOvVaw06Gy4DSxmqHq4lyFUq2oDR",
        productprice:"₹31.22",
        atcCodes: ["A10BA02"],
        products: ["Glucophage", "Glumetza"],
        smiles: "CNC(=N)N=C(N)NC(=O)O",
        imageUrl: "https://example.com/metformin.jpg"
    },
    {
        name: "Lisinopril",
        description: "Lisinopril is an ACE inhibitor used to treat high blood pressure and heart failure.",
        indications: "Hypertension, heart failure.",
        symptoms: "High blood pressure, heart failure symptoms.",
        sideEffects: "Dizziness, dry cough, increased potassium levels.",
        dosage: "10-40 mg once daily.",
        warnings: "Avoid in pregnancy due to risk of fetal harm.",
        pregnancyWarning: "Do not use during pregnancy.",
        childrenWarning: "Safe for children 6 years and older.",
        productLink: "https://www.google.com/url?url=https://egmedi.com/public/category/prescription/listril-5-tablet%3Fsrsltid%3DAfmBOoqWwIDKT44Ahs0OlYC8uYbUZ4y9BaXWbPmkeGBXbIw-3ziOB1FY9Sw%26com_cvv%3Dd30042528f072ba8a22b19c81250437cd47a2f30330f0ed03551c4efdaf3409e&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwiT-pzFgauIAxUCcGwGHUkAF9gQgOUECJ8G&usg=AOvVaw1VpjzbfceQ1m5PdOQBWduL",
        productprice:" ₹ 240 / Stripe",
        atcCodes: ["C09AA03"],
        products: ["Prinivil", "Zestril"],
        smiles: "C1CCN(C1)CC(C2=CC=CC=C2)N3CCN(CC3)C(=O)O",
        imageUrl: "https://example.com/lisinopril.jpg"
    },
    {
        name: "Omeprazole",
        description: "Omeprazole is a proton pump inhibitor used to reduce stomach acid.",
        indications: "GERD, stomach ulcers.",
        symptoms: "Heartburn, acid reflux, stomach pain.",
        sideEffects: "Headache, nausea, diarrhea.",
        dosage: "20-40 mg once daily.",
        warnings: "Long-term use may increase risk of bone fractures.",
        pregnancyWarning: "Generally considered safe during pregnancy.",
        childrenWarning: "Safe for children under doctor's supervision.",
        productLink: "https://www.google.com/url?url=https://www.medplusmart.com/product/odepraz-d-tab_odep0005%3Fsrsltid%3DAfmBOoqac72DGBfjsiVrgZQyQELgEdZgoY3yQYbyAM3RUlWBmKaiFPFuiyU&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwitgrjYgauIAxXXS2cHHbs1KPwQgOUECOwG&usg=AOvVaw1NAPFqegsSceRMNH_BZkrJ",
        productprice:" ₹ 110/Stripe",
        atcCodes: ["A02BC01"],
        products: ["Prilosec"],
        smiles: "CC1=C(C(=O)C=C(N1)C2=CC=C(C=C2)OCH3)OCH3",
        imageUrl: "https://example.com/omeprazole.jpg"
    },
    {
        name: "Loratadine",
        description: "Loratadine is an antihistamine that reduces the effects of natural histamine in the body.",
        indications: "Allergic rhinitis, urticaria (hives).",
        symptoms: "Sneezing, runny nose, itchy eyes, hives.",
        sideEffects: "Drowsiness, headache, dry mouth.",
        dosage: "10 mg once daily.",
        warnings: "Use with caution in patients with liver problems.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children 2 years and older.",
        productLink: "https://www.example.com/loratadine",
        productprice:"₹ 55 / Stripe",
        atcCodes: ["R06AX13"],
        products: ["Claritin"],
        smiles: "C1CCC(CC1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/loratadine.jpg"
    },
    {
        name: "Amoxicillin",
        description: "Amoxicillin is a penicillin antibiotic used to treat various bacterial infections.",
        indications: "Respiratory infections, ear infections, urinary tract infections.",
        symptoms: "Bacterial infections.",
        sideEffects: "Diarrhea, nausea, allergic reactions.",
        dosage: "500 mg every 8 hours for 7-10 days.",
        warnings: "May cause allergic reactions in penicillin-sensitive patients.",
        pregnancyWarning: "Generally considered safe during pregnancy.",
        childrenWarning: "Safe for children under doctor's supervision.",
        productLink: "https://www.google.com/url?url=https://www.pulseplus.in/product/mox-cv-625-mg-tablet-pc-45501&rct=j&q=&esrc=s&opi=95576897&sa=U&ved=0ahUKEwiGnZDzgauIAxXlVmwGHeJDLV8QgOUECPEG&usg=AOvVaw2aAwHzrMOFY-hy9zbqVjdE",
        productprice:" ₹ 252 / Stripe",
        atcCodes: ["J01CA04"],
        products: ["Amoxil"],
        smiles: "CC1=CC2C(O2)C(C1)N3CC(C4=CC=CC=C4)OC5=C3C=CC=C5",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPo-3_YMZxdZBvnJbmjpMre-c5PWrqod_8Cg&s"
    },
    {
        name: "Ciprofloxacin",
        description: "Antibiotic for bacterial infections like UTI, respiratory infections.",
        indications: "UTIs, respiratory infections, skin infections.",
        symptoms: "Bacterial infections.",
        sideEffects: "Nausea, diarrhea, risk of tendon damage.",
        dosage: "250-750 mg every 12 hours for 7-14 days.",
        warnings: "Risk of tendon rupture, particularly in older adults.",
        pregnancyWarning: "Avoid use during pregnancy.",
        childrenWarning: "Not recommended under 18 unless necessary.",
        productLink: "https://www.example.com/ciprofloxacin",
        productprice:"₹ 259 / Stripe ",
        atcCodes: ["J01MA02"],
        products: ["Cipro"],
        smiles: "C1CC1N2C=C(C(=O)C3=CC=CC=C32)N4CCOCC4",
        imageUrl: "https://example.com/ciprofloxacin.jpg"
    },
    {
        name: "Lisinopril",
        description: "ACE inhibitor for hypertension and heart failure.",
        indications: "High blood pressure, heart failure.",
        symptoms: "High blood pressure, risk of stroke, heart failure.",
        sideEffects: "Dizziness, dry cough, high potassium levels.",
        dosage: "10-40 mg once daily.",
        warnings: "Avoid during pregnancy.",
        pregnancyWarning: "Not safe during pregnancy.",
        childrenWarning: "Safe for children 6+ with supervision.",
        productLink: "https://www.example.com/lisinopril",
        productprice:" ₹ 240 / Stripe",
        atcCodes: ["C09AA03"],
        products: ["Prinivil", "Zestril"],
        smiles: "C1CCN(C1)CC(C2=CC=CC=C2)N3CCN(CC3)C(=O)O",
        imageUrl: "https://example.com/lisinopril.jpg"
    },
    {
        name: "Metformin",
        description: "Oral diabetes medicine to control blood sugar.",
        indications: "Type 2 diabetes.",
        symptoms: "High blood sugar, diabetes-related conditions.",
        sideEffects: "Nausea, vomiting, diarrhea.",
        dosage: "500-850 mg once or twice daily.",
        warnings: "Avoid in patients with kidney disease.",
        pregnancyWarning: "Consult doctor if pregnant.",
        childrenWarning: "Not recommended for children under 10.",
        productLink: "https://www.example.com/metformin",
        productprice:"₹31.22",
        atcCodes: ["A10BA02"],
        products: ["Glucophage", "Glumetza"],
        smiles: "CNC(=N)N=C(N)NC(=O)O",
        imageUrl: "https://example.com/metformin.jpg"
    },
    {
        name: "Omeprazole",
        description: "Proton pump inhibitor to reduce stomach acid.",
        indications: "GERD, stomach ulcers.",
        symptoms: "Heartburn, acid reflux, stomach pain.",
        sideEffects: "Headache, nausea, diarrhea.",
        dosage: "20-40 mg once daily.",
        warnings: "Long-term use may increase bone fracture risk.",
        pregnancyWarning: "Considered safe for pregnancy.",
        childrenWarning: "Safe for children with doctor’s supervision.",
        productLink: "https://www.example.com/omeprazole",
        productprice:"₹ 110/Stripe",
        atcCodes: ["A02BC01"],
        products: ["Prilosec"],
        smiles: "CC1=C(C(=O)C=C(N1)C2=CC=C(C=C2)OCH3)OCH3",
        imageUrl: "https://example.com/omeprazole.jpg"
    },

    {
        name: "Doxycycline",
        description: "Antibiotic for bacterial infections including acne, UTIs, and pneumonia.",
        indications: "Acne, pneumonia, UTIs, Lyme disease.",
        symptoms: "Bacterial infections.",
        sideEffects: "Diarrhea, sun sensitivity, nausea.",
        dosage: "100 mg every 12 hours for 7-10 days.",
        warnings: "Can cause esophageal irritation. Avoid lying down after taking.",
        pregnancyWarning: "Not recommended during pregnancy.",
        childrenWarning: "Avoid in children under 8 due to teeth discoloration.",
        productLink: "https://www.example.com/doxycycline",
        productprice:"₹ 300 / Strip",
        atcCodes: ["J01AA02"],
        products: ["Vibramycin"],
        smiles: "C1CCN(CC1)CC(=O)C2=CC=CC=C2",
        imageUrl: "https://example.com/doxycycline.jpg"
    },

    {
        name: "Simvastatin",
        description: "Used to lower cholesterol and triglycerides.",
        indications: "High cholesterol, prevention of heart disease.",
        symptoms: "High cholesterol, risk of heart disease.",
        sideEffects: "Muscle pain, liver problems.",
        dosage: "10-40 mg once daily in the evening.",
        warnings: "Avoid grapefruit products during use.",
        pregnancyWarning: "Not safe during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/simvastatin",
        productprice:"10 Rs",
        atcCodes: ["C10AA01"],
        products: ["Zocor"],
        smiles: "C1CCN(CC1)CC(=O)C2=CC=CC=C2",
        imageUrl: "https://example.com/simvastatin.jpg"
    },

    {
        name: "Atorvastatin",
        description: "Statin used to lower cholesterol and reduce heart disease risk.",
        indications: "High cholesterol, prevention of cardiovascular diseases.",
        symptoms: "High cholesterol.",
        sideEffects: "Muscle pain, liver problems.",
        dosage: "10-80 mg once daily.",
        warnings: "Avoid grapefruit products.",
        pregnancyWarning: "Not safe for pregnancy.",
        childrenWarning: "Not recommended for children under 10.",
        productLink: "https://www.example.com/atorvastatin",
        productprice:"10 Rs",
        atcCodes: ["C10AA05"],
        products: ["Lipitor"],
        smiles: "C[C@H](CC[C@@H](C(O)=O)O)C1=CC=CC=C1",
        imageUrl: "https://example.com/atorvastatin.jpg"
    },

    {
        name: "Levothyroxine",
        description: "Synthetic hormone used to treat hypothyroidism.",
        indications: "Hypothyroidism, enlarged thyroid, thyroid cancer.",
        symptoms: "Fatigue, weight gain, cold intolerance (hypothyroidism).",
        sideEffects: "Hair loss, increased heart rate.",
        dosage: "25-200 mcg once daily.",
        warnings: "Overdose can cause hyperthyroidism.",
        pregnancyWarning: "Generally considered safe during pregnancy.",
        childrenWarning: "Safe for children under doctor's supervision.",
        productLink: "https://www.example.com/levothyroxine",
        productprice:"10 Rs",
        atcCodes: ["H03AA01"],
        products: ["Synthroid", "Levoxyl"],
        smiles: "C1CCN(CC1)CC(=O)C2=CC=CC=C2",
        imageUrl: "https://example.com/levothyroxine.jpg"
    },

    {
        name: "Amlodipine",
        description: "Calcium channel blocker used to treat high blood pressure and chest pain.",
        indications: "Hypertension, angina (chest pain).",
        symptoms: "High blood pressure, chest pain.",
        sideEffects: "Swelling, dizziness, fatigue.",
        dosage: "5-10 mg once daily.",
        warnings: "May cause low blood pressure.",
        pregnancyWarning: "Consult doctor during pregnancy.",
        childrenWarning: "Safe for children 6+ with doctor's guidance.",
        productLink: "https://www.example.com/amlodipine",
        productprice:"10 Rs",
        atcCodes: ["C08CA01"],
        products: ["Norvasc"],
        smiles: "CC1=CC=CC=C1N2CCN(CC2)CC3=CC=C(C=C3)C(=O)O",
        imageUrl: "https://example.com/amlodipine.jpg"
    },

    {
        name: "Prednisone",
        description: "Steroid used to treat a variety of conditions such as allergies, arthritis, and asthma.",
        indications: "Allergic reactions, arthritis, asthma.",
        symptoms: "Inflammation, swelling, allergic reactions.",
        sideEffects: "Increased appetite, weight gain, mood changes.",
        dosage: "5-60 mg daily depending on condition.",
        warnings: "Long-term use can suppress immune system.",
        pregnancyWarning: "Consult doctor if pregnant.",
        childrenWarning: "Safe for short-term use in children.",
        productLink: "https://www.example.com/prednisone",
        productprice:"10 Rs",
        atcCodes: ["H02AB07"],
        products: ["Deltasone"],
        smiles: "C[C@H](CC[C@H](O)C(=O)C1=CC=CC=C1)O",
        imageUrl: "https://example.com/prednisone.jpg"
    },

    {
        name: "Hydrochlorothiazide",
        description: "A diuretic used to treat high blood pressure and fluid retention.",
        indications: "Hypertension, edema.",
        symptoms: "High blood pressure, swelling due to fluid retention.",
        sideEffects: "Low potassium, dizziness, increased urination.",
        dosage: "12.5-50 mg once daily.",
        warnings: "Monitor electrolytes during use.",
        pregnancyWarning: "Consult your doctor before use.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/hydrochlorothiazide",
        productprice:"10 Rs",
        atcCodes: ["C03AA03"],
        products: ["Microzide"],
        smiles: "C1=CC=C(C=C1)C2=CC=C(C=C2)C(=O)N3CCN(CC3)C(=O)O",
        imageUrl: "https://example.com/hydrochlorothiazide.jpg"
    },

    {
        name: "Montelukast",
        description: "A leukotriene inhibitor used to treat allergies and prevent asthma attacks.",
        indications: "Allergic rhinitis, asthma.",
        symptoms: "Nasal congestion, asthma symptoms.",
        sideEffects: "Headache, dizziness, mood changes.",
        dosage: "10 mg once daily in the evening.",
        warnings: "May cause mood changes, depression.",
        pregnancyWarning: "Consult your doctor before use during pregnancy.",
        childrenWarning: "Safe for children 2+ with doctor's guidance.",
        productLink: "https://www.example.com/montelukast",
        productprice:"10 Rs",
        atcCodes: ["R03DC03"],
        products: ["Singulair"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/montelukast.jpg"
    },

    {
        name: "Clopidogrel",
        description: "An antiplatelet medication used to prevent heart attacks and strokes.",
        indications: "Prevention of heart attack, stroke.",
        symptoms: "Blood clot prevention.",
        sideEffects: "Bleeding, bruising, diarrhea.",
        dosage: "75 mg once daily.",
        warnings: "May increase bleeding risk.",
        pregnancyWarning: "Consult your doctor before use.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/clopidogrel",
        productprice:"10 Rs",
        atcCodes: ["B01AC04"],
        products: ["Plavix"],
        smiles: "CC(C1=CC=C(C=C1)O)N2CCC(C3=CC=CC=C3)NC2",
        imageUrl: "https://example.com/clopidogrel.jpg"
    },

    {
        name: "Citalopram",
        description: "A selective serotonin reuptake inhibitor (SSRI) used to treat depression.",
        indications: "Depression, anxiety.",
        symptoms: "Mood disorders.",
        sideEffects: "Nausea, dry mouth, drowsiness.",
        dosage: "20-40 mg once daily.",
        warnings: "May increase risk of suicidal thoughts in young adults.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/citalopram",
        productprice:"10 Rs",
        atcCodes: ["N06AB04"],
        products: ["Celexa"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/citalopram.jpg"
    },

    {
        name: "Escitalopram",
        description: "An antidepressant used to treat anxiety and major depressive disorder.",
        indications: "Anxiety, depression.",
        symptoms: "Anxiety, mood disorders.",
        sideEffects: "Drowsiness, dry mouth, insomnia.",
        dosage: "10-20 mg once daily.",
        warnings: "May increase risk of suicidal thoughts.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Not recommended for children under 12.",
        productLink: "https://www.example.com/escitalopram",
        productprice:"10 Rs",
        atcCodes: ["N06AB10"],
        products: ["Lexapro"],
        smiles: "CC(C1=CC=C(C=C1)O)N2CCC(C3=CC=CC=C3)NC2",
        imageUrl: "https://example.com/escitalopram.jpg"
    },

    {
        name: "Cetirizine",
        description: "An antihistamine used to relieve allergy symptoms like sneezing and runny nose.",
        indications: "Allergic rhinitis, urticaria.",
        symptoms: "Sneezing, itchy eyes, runny nose.",
        sideEffects: "Drowsiness, dry mouth, dizziness.",
        dosage: "10 mg once daily.",
        warnings: "May cause drowsiness. Use caution when driving.",
        pregnancyWarning: "Generally considered safe during pregnancy.",
        childrenWarning: "Safe for children 2+ under supervision.",
        productLink: "https://www.example.com/cetirizine",
        productprice:"10 Rs",
        atcCodes: ["R06AE07"],
        products: ["Zyrtec"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/cetirizine.jpg"
    },

    {
        name: "Acyclovir",
        description: "An antiviral drug used to treat herpes virus infections.",
        indications: "Herpes simplex, shingles, chickenpox.",
        symptoms: "Cold sores, genital herpes, shingles.",
        sideEffects: "Nausea, diarrhea, headache.",
        dosage: "200 mg five times daily for 5-10 days.",
        warnings: "Drink plenty of water to prevent kidney issues.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor's guidance.",
        productLink: "https://www.example.com/acyclovir",
        productprice:"10 Rs",
        atcCodes: ["J05AB01"],
        products: ["Zovirax"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/acyclovir.jpg"
    },

    {
        name: "Warfarin",
        description: "An anticoagulant used to prevent blood clots in veins, arteries, and lungs.",
        indications: "Blood clot prevention, deep vein thrombosis, pulmonary embolism.",
        symptoms: "Blood clot prevention.",
        sideEffects: "Bleeding, bruising, nausea.",
        dosage: "5 mg once daily. Adjust based on INR levels.",
        warnings: "Monitor blood regularly to avoid excessive bleeding.",
        pregnancyWarning: "Avoid during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/warfarin",
        productprice:"10 Rs",
        atcCodes: ["B01AA03"],
        products: ["Coumadin"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/warfarin.jpg"
    },

    {
        name: "Insulin Glargine",
        description: "A long-acting insulin used to control blood sugar in diabetes.",
        indications: "Type 1 and type 2 diabetes.",
        symptoms: "High blood sugar, diabetes management.",
        sideEffects: "Low blood sugar, weight gain.",
        dosage: "Administer once daily at the same time each day.",
        warnings: "Monitor blood sugar regularly.",
        pregnancyWarning: "Consult doctor if pregnant.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/insulin-glargine",
        productprice:"10 Rs",
        atcCodes: ["A10AE04"],
        products: ["Lantus"],
        smiles: "C1=CC=C(C=C1)C2=CC=CC=C2C3=CC=CC=C3",
        imageUrl: "https://example.com/insulin-glargine.jpg"
    },

    {
        name: "Losartan",
        description: "An angiotensin II receptor blocker used to treat high blood pressure and kidney issues.",
        indications: "Hypertension, diabetic nephropathy.",
        symptoms: "High blood pressure, kidney protection.",
        sideEffects: "Dizziness, headache, back pain.",
        dosage: "50-100 mg once daily.",
        warnings: "Monitor blood pressure regularly.",
        pregnancyWarning: "Avoid use during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/losartan",
        productprice:"10 Rs",
        atcCodes: ["C09CA01"],
        products: ["Cozaar"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/losartan.jpg"
    },

    {
        name: "Metformin",
        description: "A medication used to manage type 2 diabetes by controlling blood sugar levels.",
        indications: "Type 2 diabetes.",
        symptoms: "High blood sugar, diabetes management.",
        sideEffects: "Nausea, diarrhea, abdominal discomfort.",
        dosage: "500-2000 mg daily in divided doses.",
        warnings: "Monitor kidney function regularly.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children 10+ with doctor’s guidance.",
        productLink: "https://www.example.com/metformin",
        productprice:"10 Rs",
        atcCodes: ["A10BA02"],
        products: ["Glucophage"],
        smiles: "CN(C)C(=O)C1=CC=CC=C1",
        imageUrl: "https://example.com/metformin.jpg"
    },

    {
        name: "Lisinopril",
        description: "An ACE inhibitor used to treat high blood pressure and heart failure.",
        indications: "Hypertension, heart failure.",
        symptoms: "High blood pressure, heart failure management.",
        sideEffects: "Cough, dizziness, headache.",
        dosage: "10-40 mg once daily.",
        warnings: "Monitor kidney function and blood pressure.",
        pregnancyWarning: "Avoid use during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/lisinopril",
        productprice:"10 Rs",
        atcCodes: ["C09AA03"],
        products: ["Prinivil"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/lisinopril.jpg"
    },

    {
        name: "Gabapentin",
        description: "An anticonvulsant used to treat nerve pain and seizures.",
        indications: "Neuropathic pain, seizures.",
        symptoms: "Nerve pain, seizure prevention.",
        sideEffects: "Dizziness, drowsiness, weight gain.",
        dosage: "300-3600 mg daily in divided doses.",
        warnings: "May cause drowsiness; avoid alcohol.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/gabapentin",
        productprice:"10 Rs",
        atcCodes: ["N03AX12"],
        products: ["Neurontin"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/gabapentin.jpg"
    },

    {
        name: "Simvastatin",
        description: "A statin used to lower cholesterol and prevent cardiovascular disease.",
        indications: "High cholesterol, cardiovascular disease prevention.",
        symptoms: "High cholesterol management.",
        sideEffects: "Muscle pain, liver damage, digestive problems.",
        dosage: "10-40 mg once daily in the evening.",
        warnings: "Monitor liver function regularly.",
        pregnancyWarning: "Avoid use during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/simvastatin",
        productprice:"10 Rs",
        atcCodes: ["C10AA01"],
        products: ["Zocor"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/simvastatin.jpg"
    },

    {
        name: "Alprazolam",
        description: "A benzodiazepine used to treat anxiety and panic disorders.",
        indications: "Anxiety, panic attacks.",
        symptoms: "Anxiety relief.",
        sideEffects: "Drowsiness, dizziness, addiction risk.",
        dosage: "0.25-4 mg daily in divided doses.",
        warnings: "May cause dependency; avoid alcohol.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/alprazolam",
        productprice:"10 Rs",
        atcCodes: ["N05BA12"],
        products: ["Xanax"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/alprazolam.jpg"
    },

    {
        name: "Azithromycin",
        description: "An antibiotic used to treat various bacterial infections.",
        indications: "Bacterial infections, respiratory infections.",
        symptoms: "Infection relief.",
        sideEffects: "Nausea, diarrhea, abdominal pain.",
        dosage: "500 mg once daily for 3-5 days.",
        warnings: "May cause gastrointestinal issues.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/azithromycin",
        productprice:"10 Rs",
        atcCodes: ["J01FA10"],
        products: ["Zithromax"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/azithromycin.jpg"
    },

    {
        name: "Omeprazole",
        description: "A proton pump inhibitor used to treat gastroesophageal reflux disease (GERD) and stomach ulcers.",
        indications: "GERD, stomach ulcers.",
        symptoms: "Acid reflux, ulcer relief.",
        sideEffects: "Headache, nausea, abdominal pain.",
        dosage: "20-40 mg once daily before meals.",
        warnings: "Long-term use may cause bone fractures.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children 1+ with doctor’s guidance.",
        productLink: "https://www.example.com/omeprazole",
        productprice:"10 Rs",
        atcCodes: ["A02BC01"],
        products: ["Prilosec"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/omeprazole.jpg"
    },

    {
        name: "Lorazepam",
        description: "A benzodiazepine used to treat anxiety and insomnia.",
        indications: "Anxiety, insomnia.",
        symptoms: "Anxiety relief, sleep aid.",
        sideEffects: "Drowsiness, dizziness, memory problems.",
        dosage: "1-4 mg daily in divided doses.",
        warnings: "May cause dependency; avoid alcohol.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Not recommended for children.",
        productLink: "https://www.example.com/lorazepam",
        productprice:"10 Rs",
        atcCodes: ["N05BA06"],
        products: ["Ativan"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/lorazepam.jpg"
    },
    
    {
        name: "Furosemide",
        description: "A diuretic used to treat edema and high blood pressure.",
        indications: "Edema, hypertension.",
        symptoms: "Fluid retention, high blood pressure.",
        sideEffects: "Dehydration, low potassium, dizziness.",
        dosage: "20-80 mg once or twice daily.",
        warnings: "Monitor electrolytes and kidney function.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/furosemide",
        productprice:"10 Rs",
        atcCodes: ["C03CA01"],
        products: ["Lasix"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/furosemide.jpg"
    },
    {
        name: "Hydrochlorothiazide",
        description: "A thiazide diuretic used to treat high blood pressure and fluid retention.",
        indications: "Hypertension, edema.",
        symptoms: "High blood pressure, fluid retention.",
        sideEffects: "Dizziness, headache, electrolyte imbalance.",
        dosage: "12.5-50 mg once daily.",
        warnings: "Monitor electrolytes and kidney function.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/hydrochlorothiazide",
        productprice:"10 Rs",
        productprice:"10 Rs",
        atcCodes: ["C03AA03"],
        products: ["Microzide"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/hydrochlorothiazide.jpg"
    },
    {
        name: "Clonazepam",
        description: "A benzodiazepine used to prevent and control seizures and panic attacks.",
        indications: "Seizures, panic attacks.",
        symptoms: "Seizure control, anxiety relief.",
        sideEffects: "Drowsiness, dizziness, impaired coordination.",
        dosage: "0.5-20 mg daily in divided doses.",
        warnings: "May cause dependency; avoid alcohol.",
        pregnancyWarning: "Consult your doctor during pregnancy.",
        childrenWarning: "Safe for children with doctor’s guidance.",
        productLink: "https://www.example.com/clonazepam",
        productprice:"10 Rs",
        atcCodes: ["N03AE01"],
        products: ["Klonopin"],
        smiles: "CC1=CC2=C(C=C1)C(=O)N(C(=O)O)C2",
        imageUrl: "https://example.com/clonazepam.jpg"
    },
];



function fetchDrugInfo(drugName) {
    drugName = drugName.trim().toLowerCase();
    
    const drug = drugs.find(drug => drug.name.toLowerCase() === drugName);

    return drug || null;
}

function displayDrugInfo(drugInfo) {
    const drugInfoSection = document.getElementById("drug-info-section");
    if (drugInfo) {
        drugInfoSection.innerHTML = `
            <h2 style="font-size: 40px;font-weight: bolder;color:crimson">${drugInfo.name}</h2>
            <br>
            <p><strong>Description:</strong> ${drugInfo.description}</p>
            <p><strong>Indications:</strong> ${drugInfo.indications}</p>
            <p><strong>Side Effects:</strong> ${drugInfo.sideEffects}</p>
            <p><strong>Symptoms:</strong> ${drugInfo.symptoms}</p>
            <p><strong>Dosage:</strong> ${drugInfo.dosage}</p>
            <p><strong>Warnings:</strong> ${drugInfo.warnings}</p>
            <p><strong>Pregnancy & Breastfeeding Warning:</strong> ${drugInfo.pregnancyWarning}</p>
            <p><strong>Children's Warning:</strong> ${drugInfo.childrenWarning}</p>
            <p><strong>ATC Codes:</strong> ${drugInfo.atcCodes}</p>
            <p><strong>Products:</strong> ${drugInfo.products}</p>
            <p><strong>Product Price:</strong> ${drugInfo.productprice}</p>
            <p><strong>SMILES:</strong> ${drugInfo.smiles}</p>
            <img class="drug-image" src="${drugInfo.imageUrl}" alt="${drugInfo.name} image"><br>
            <a href="${drugInfo.productLink}" target="_blank" class="external-link">View Product Availability <i class='bx bxs-cart-add' style='color:#ffffff'  ></i></a>
            <br>
            <p style="font-size: 10px;"><strong style="font-size: 24px;color:white">Please consult your doctor before using this drug. </strong></p>`;

        speakDrugInfo(drugInfo);
    } else {
        drugInfoSection.innerHTML = '<p class="error-message">Drug information not found.</p>';
        const speech = new SpeechSynthesisUtterance('Drug information not found');
        window.speechSynthesis.speak(speech);
    }
}

function speakDrugInfo(drugInfo) {
    let speechText = `
        Here is the information for the drug ${drugInfo.name}.
        Description: ${drugInfo.description}.
        Side Effects: ${drugInfo.sideEffects}.
        Dosage: ${drugInfo.dosage}.
        Warnings: ${drugInfo.warnings}.
        Please consult your doctor before using this drug.
        `;
    const speech = new SpeechSynthesisUtterance(speechText);

    window.speechSynthesis.speak(speech);
}



function searchDrug() {
    const searchInput = document.getElementById("search-input");
    const drugName = searchInput.value.trim();

    if (drugName === "") {
        const message = "Please enter a drug name.";
        alert(message);
        
        const speech = new SpeechSynthesisUtterance(message);
        window.speechSynthesis.speak(speech);
        
        return;
    }

    const drugInfoSection = document.getElementById("drug-info-section");
    drugInfoSection.innerHTML = '<div class="loader"></div>';

    setTimeout(() => {
        const drugInfo = fetchDrugInfo(drugName);
        displayDrugInfo(drugInfo);
    }, 1000);
}

document.getElementById("search-button").addEventListener("click", searchDrug);

document.getElementById("search-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        searchDrug();
    }
});

document.getElementById("speech-button").addEventListener("click", function() {
    const recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function(event) {
        const speechResult = event.results[0][0].transcript.trim();
        document.getElementById("search-input").value = speechResult;
        searchDrug();
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error detected: ' + event.error);
        alert("Speech recognition error")
    };
});

document.addEventListener('contextmenu',

    function (event) {
    
    event.preventDefault();
})

document.getElementById

('contact-form').addEventListener

('submit', function (event) {

event.preventDefault();

var data = new FormData (event.target);

fetch("URL", {

    method: 'POST',

    body: data,

}).then(response => {

    if (response.ok) {
        alert('Success');

} else {
    alert('Error');

}

});

document.getElementById

('contact-form').reset();

});


        document.addEventListener('DOMContentLoaded', function () {
            if (localStorage.getItem('foodbankIsLoggedIn')) {
                document.getElementById('foodbank-login-btn').innerText = 'Logout';
            }
            document.getElementById('foodbank-login-btn').addEventListener('click', function (event) {
                if (localStorage.getItem('foodbankIsLoggedIn')) {
                    localStorage.removeItem('foodbankIsLoggedIn');
                    document.getElementById('foodbank-login-btn').innerText = 'Login'; 
                } else {
                    localStorage.setItem('foodbankIsLoggedIn', true);
                    document.getElementById('foodbank-login-btn').innerText = 'Logout';
                }
            });
        });

document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('pillReminder')) {
        const savedReminder = JSON.parse(localStorage.getItem('pillReminder'));
        checkReminder(savedReminder); 
    }
});

function checkReminder(savedReminder) {
    const currentTime = new Date().getTime();
    const reminderTime = savedReminder.reminderTimestamp;

    const timeDifference = reminderTime - currentTime;

    if (timeDifference > 0) {
        setTimeout(function () {
            showNotification(savedReminder.pillName);
            localStorage.removeItem('pillReminder');
        }, timeDifference);
    } else if (timeDifference <= 0) {
        showNotification(savedReminder.pillName);
        localStorage.removeItem('pillReminder');
    }
}

if (Notification.permission !== "granted") {
    Notification.requestPermission();
}

function showNotification(pillName) {
    if (Notification.permission === "granted") {
        new Notification(`Time to take your pill: ${pillName}`);
    } else {
        alert(`Time to take your pill: ${pillName}`);
    }
}



