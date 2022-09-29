<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-container_item footer-newsletter">
                <h3 class="footer-newsletter_title">Stay posted</h3>
                <p>Let's be friends. Subscribe to our newsletter to receive updates on new launches, recipes, playlists, and more.</p>
                <div class="footer-newsletter_form">
                    <input type="mail" class="input-mail" placeholder="your mail">
                    <button type="submit" class="button-submit" value="submit">submit</button>
                </div>
            </div>
            <div class="footer-container_item footer-navigation">
                <p class="footer-navigation_title">Explore</p>
                <a href="#">Home</a>
                <a href="#">Shop</a>
                <a href="#">Membership</a>
                <a href="#">Our Story</a>
                <a href="#">FAQ</a>
                <a href="#">Refer a Friend</a>
                <a href="#">Corporate Gifting</a>
                <a href="#">Gift Card</a>
            </div>
            <div class="footer-container_item footer-socials">
                <p class="footer-socials_title">Follow</p>
                <a href="#">Instagram</a>
                <a href="#">Spotify</a>
                <a href="#">Twitter</a>
                <a href="#">Facebook</a>
            </div>
        </div>
        <div class="footer-copyrights">
            <p class="footer-copyrights_item">© Haus 2022</p>
            <p class="footer-copyrights_item">Contact Us</p>
            <p class="footer-copyrights_item">Return Policy</p>
            <p class="footer-copyrights_item">Privacy Policy</p>
            <p class="footer-copyrights_item">Terms and Conditions</p>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "Footer",
        props: {},
        data() {
            return {}
        },
        computed: {}
    }
</script>

<style lang="scss" scoped>
.footer {
    background-color: #191919;
    width: 100%;

    &-container {
        margin: 0 auto;
        padding: 5em 0;
        max-width: 1320px;
        display: flex;
        gap: 3em;
    }

    &-newsletter {
        flex: 2 2 auto;

        &_title {
            margin: 0 0 1em;
            color: #f7f7f7;
            font-weight: 400;
            font-size: 42px;
            line-height: 72px;
        }

        &>p {
            margin: 0 0 .8em;
            color: #f7f7f7;
            font-weight: 400;
            font-size: 18px;
            line-height: 27px;
        }

        &_form {
            display: flex;
            border: 1px solid rgba(255, 255, 255, 0.6);
            width: fit-content;
        }
    }

    &-socials {
        flex: 1 1 300px;
        display: flex;
        flex-direction: column;
        gap: 1.2em;

        &_title {
            margin: 0 0;
            color: #f7f7f7;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            text-transform: uppercase;
        }

        &> a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }
    }

    &-navigation {
        flex: 1 1 300px;
        display: flex;
        flex-direction: column;
        gap: 1.2em;

        &_title {
            margin: 0 0;
            color: #f7f7f7;
            font-weight: 400;
            font-size: 14px;
            line-height: 21px;
            text-transform: uppercase;
        }

        &> a {
            color: rgba(255, 255, 255, 0.6);
            text-decoration: none;
            font-weight: 400;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 1px;
            text-transform: uppercase;
        }

    }

    &-copyrights {
        margin: 0 auto;
        max-width: 1320px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        gap: 3em;

        &_item {
            color: rgba(255, 255, 255, 0.6);
            font-weight: 400;
            font-size: 16px;
            line-height: 24px;
        
            &:first-child {
                color: #f7f7f7;
                font-weight: 400;
                font-size: 15px;
                line-height: 24px;
            }
        }
    }
}
.input-mail {
    padding: 1em;
    background-color: transparent;
    color: #818181;
    appearance: none;
    border: none;
    border-radius: 0;
    outline: 0;
    outline-offset: 0;
    font-weight: 400;
    font-size: 9px;
    line-height: 14px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
}
.button-submit {
    background-color: transparent;
    border: none;
    color: #f7f7f7;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.12px;
    text-transform: uppercase;
    cursor: pointer;
}    
</style>