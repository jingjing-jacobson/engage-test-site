<template>
    <div class="home">
        <h1 class="home-h1">Home Page</h1>
        <div class="pii-container">
            <h3>PII</h3>
            <ul>
                <li><strong>Name:</strong> John Doe</li>
                <li><strong>Address:</strong> 123 Main St, Springfield, IL</li>
                <li><strong>Email:</strong> johndoe@example.com</li>
                <li><strong>Phone Number:</strong> (555) 123-4567</li>
                <li><strong>Zipcode:</strong> 62704</li>
                <li><strong>SSN:</strong> 123-45-6789</li>
                <li><strong>Passport Number:</strong> X12345678</li>
                <li><strong>Credit Card Number:</strong> 4111 1111 1111 1111</li>
                <li><strong>Birthdate:</strong> 01/01/1980</li>
            </ul>
        </div>
        <v-form @submit.prevent>
            <v-container class="form-container">
                <v-row>
                    <v-text-field id="first-name-input" v-model="firstName" label="First name"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="last-name-input" v-model="lastName" label="Last name"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="email-input" v-model="email" label="Email" type="email"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="phone-input" v-model="phone" label="Phone Number" type="tel"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="password-input" v-model="password" label="Password" type="password"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="fun-fact-input" v-model="funFact" label="A fun silly fact"> </v-text-field>
                </v-row>
                <v-btn id="form-submit-btn" type="submit">
                  Submit
                </v-btn>
            </v-container>
        </v-form>
        <v-btn class="pendo-ignore" @click="onClick">
            .pendo-ignore class
        </v-btn>
        <br>
        <br>
        <v-btn id="hello:world">
            id with colon
        </v-btn>
        <br>
        <br>
        <v-btn id="attribute-with-no-value" empty-attribute>
            empty attribute
        </v-btn>
        <br>
        <br>
        <v-btn id="data-attr" data-attr="foo-bar-blah">
            data-attr
        </v-btn>
        <br>
        <br>
        <div class="cards-wrapper">
            <div v-for="card in cards" :key="card.title" class="card-wrapper">
                <v-btn class="card-title-btn">
                    {{ card.title }}
                </v-btn>
                <div class="card-content">{{ card.content }}</div>
            </div>
        </div>
        <!-- <v-btn id="_n1oz$b">
            invalid attribute?            
        </v-btn> -->
        <a role="menuitem" id="_n1oz$b" bh="PMI" class="w-pmi-item cellColl" aria-hidden="false" href="#" tabindex="-1">Invoice</a>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl. Duis at tellus at urna. Eget aliquet
            nibh praesent tristique. Id semper risus in hendrerit. Mi sit amet mauris commodo quis imperdiet. Tellus
            rutrum tellus pellentesque eu. Eget magna fermentum iaculis eu non. Id aliquet lectus proin nibh nisl
            condimentum id. Tortor pretium viverra suspendisse potenti nullam. Sollicitudin nibh sit amet commodo nulla.
            Amet dictum sit amet justo donec enim.
        </p>

        <p>
            Amet aliquam id diam maecenas. Id leo in vitae turpis massa sed. Mollis nunc sed id semper risus in
            hendrerit. Natoque penatibus et magnis dis parturient montes nascetur ridiculus. Facilisi cras fermentum
            odio eu feugiat pretium nibh ipsum consequat. Etiam sit amet nisl purus in. Convallis tellus id interdum
            velit laoreet id donec ultrices tincidunt. Non diam phasellus vestibulum lorem sed risus ultricies
            tristique. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor aliquam. Ac tortor vitae
            purus faucibus ornare. Pharetra massa massa ultricies mi quis hendrerit. Viverra orci sagittis eu volutpat
            odio facilisis. Iaculis nunc sed augue lacus viverra vitae congue eu consequat. Ullamcorper morbi tincidunt
            ornare massa eget. Adipiscing elit ut aliquam purus sit amet luctus. Facilisis magna etiam tempor orci eu
            lobortis. Ornare arcu odio ut sem nulla pharetra. Massa enim nec dui nunc mattis enim ut. Sit amet mauris
            commodo quis imperdiet massa tincidunt nunc. At varius vel pharetra vel turpis nunc eget lorem.
        </p>

        <p>
            Tellus orci ac auctor augue. Rhoncus urna neque viverra justo nec. Suspendisse potenti nullam ac tortor
            vitae purus faucibus ornare suspendisse. A diam sollicitudin tempor id eu nisl nunc mi. Ultricies mi eget
            mauris pharetra et ultrices neque ornare. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. A
            arcu cursus vitae congue mauris rhoncus aenean vel elit. Nullam eget felis eget nunc lobortis mattis aliquam
            faucibus. Iaculis urna id volutpat lacus laoreet non. Risus nullam eget felis eget nunc lobortis mattis
            aliquam. Consequat mauris nunc congue nisi vitae suscipit tellus mauris a. Molestie nunc non blandit massa
            enim nec dui. Sit amet purus gravida quis blandit turpis cursus in. Dignissim enim sit amet venenatis urna
            cursus eget. Sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus. Porttitor lacus
            luctus accumsan tortor. Sem viverra aliquet eget sit amet tellus cras adipiscing enim. Sagittis id
            consectetur purus ut faucibus pulvinar elementum.
        </p>

        <div class="pii-data-section">
            <h2>Extended PII Data Collection</h2>
            
            <h3>📧 Email Addresses:</h3>
            <ul>
                <li>john.doe@example.com</li>
                <li>jane_doe123@sub.mail.co.uk</li>
                <li>user+alias@domain.io</li>
                <li>FIRST.LAST@COMPANY.ORG</li>
                <li>admin@localhost</li>
                <li>test.email+alex@leetcode.com</li>
                <li>"weird\"email"@example.com</li>
            </ul>

            <h3>📞 US & International Phone Numbers:</h3>
            <ul>
                <li>123-456-7890</li>
                <li>(123) 456-7890</li>
                <li>123.456.7890</li>
                <li>+1 (123) 456-7890</li>
                <li>+11234567890</li>
                <li>4567890</li>
                <li>1-800-FLOWERS</li>
                <li>+44 20 7946 0958        (UK)</li>
                <li>+49 30 901820           (Germany)</li>
                <li>+91-9876543210          (India)</li>
                <li>+81 3-1234-5678         (Japan)</li>
                <li>+33 1 23 45 67 89       (France)</li>
                <li>+61 2 9876 5432         (Australia)</li>
                <li>+55 11 91234-5678       (Brazil)</li>
                <li>+234 803 123 4567       (Nigeria)</li>
                <li>+86 10 1234 5678        (China)</li>
            </ul>

            <h3>💳 Credit Card Numbers:</h3>
            <ul>
                <li>4111 1111 1111 1111</li>
                <li>5500 0000 0000 0004</li>
                <li>3400 0000 0000 009</li>
                <li>6011 0000 0000 0004</li>
                <li>3000 0000 0000 04</li>
                <li>3530 1113 3330 0000</li>
            </ul>

            <h3>🔐 Social Security Numbers (SSN):</h3>
            <ul>
                <li>123-45-6789</li>
                <li>987654321</li>
                <li>000-00-0000</li>
                <li>666-66-6666</li>
            </ul>

            <h3>🌐 IPv4 Addresses:</h3>
            <ul>
                <li>192.168.0.1</li>
                <li>10.0.0.255</li>
                <li>127.0.0.1</li>
                <li>255.255.255.255</li>
                <li>0.0.0.0</li>
                <li>8.8.8.8</li>
                <li>172.16.254.3</li>
            </ul>

            <h3>🌐 IPv6 Addresses:</h3>
            <ul>
                <li>2001:0db8:85a3:0000:0000:8a2e:0370:7334</li>
                <li>2001:db8::8a2e:370:7334</li>
                <li>fe80::1ff:fe23:4567:890a</li>
                <li>::1</li>
                <li>::ffff:192.0.2.128</li>
                <li>0:0:0:0:0:0:0:1</li>
            </ul>

            <h3>🎂 Dates (Birthdays):</h3>
            <ul>
                <li>01/02/1990</li>
                <li>1990-02-01</li>
                <li>February 1, 1990</li>
                <li>2/1/90</li>
                <li>1990.02.01</li>
            </ul>

            <h3>🏤 US ZIP Codes:</h3>
            <ul>
                <li>12345</li>
                <li>12345-6789</li>
                <li>54321</li>
                <li>99999-0000</li>
            </ul>

            <h3>🏡 Street Addresses:</h3>
            <ul>
                <li>123 Main St</li>
                <li>456 Elm Street Apt 7B</li>
                <li>789 W. 1st Ave, Suite 300</li>
                <li>1600 Pennsylvania Ave NW</li>
                <li>1 Infinite Loop, Cupertino, CA</li>
                <li>221B Baker Street</li>
            </ul>

            <h3>🛂 Passport Numbers:</h3>
            <ul>
                <li>C1234567</li>
                <li>K3209876</li>
                <li>YA3456789</li>
                <li>123456789</li>
                <li>AA0000000</li>
                <li>L898902C3</li>
            </ul>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
    components: {},
    data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            password: '',
            funFact: '',
            cards: [
                {
                    title: 'Card 1',
                    content: 'This is card 1'
                },
                {
                    title: 'Card 2',
                    content: 'This is card 2'
                },
                {
                    title: 'Card 3',
                    content: 'This is card 3'
                }
            ]
        };
    },
    methods: {
        onClick () {
            console.warn('sending track event');
            window.pendo.track('babys-first-track-event');
        }
    }
};
</script>

<style>
.home {
    padding: 20px;
}
.form-container {
  width: 700px;
  margin-right: inherit;
  margin-left: inherit;
}
.invalid-btn:authorize {
    color: red !important;
}
.card-wrapper {
    border: 1px solid #8ACE00;
    padding: 10px;
    margin-bottom: 10px;
}
</style>
