<template>
    <div class="home">
        <h1 class="home-h1">Home Page</h1>
        <v-form @submit.prevent>
            <v-container class="form-container">
                <v-row>
                    <v-text-field id="first-name-input" v-model="firstName" label="First name"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="last-name-input" v-model="lastName" label="Last name"> </v-text-field>
                </v-row>
                <v-row>
                    <v-text-field id="fun-fact-input" v-model="funFact" label="A fun silly fact"> </v-text-field>
                </v-row>
                <v-btn id="form-submit-btn" type="submit">
                  Submit
                </v-btn>
            </v-container>
        </v-form>
        <v-btn class="pendo-ignore">
            .pendo-ignore class
        </v-btn>
        <v-btn id="_n1oz$b">
            invalid attribute?            
        </v-btn>
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
            funFact: ''
        };
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
</style>
