import styles from './footer.module.css';

const MemorialFooter = () => {
	return (
		// <ul id="memorial-navbar" className="flex justify-center items-center w-full p-6 2xl:p-6 text-xl bg-indigo-300 text-[#545F66]font-bold">
		<footer id="memorial-footer" className={styles.footer}>
			<p>If you'd like to submit a photo or a comment, please send an email to <a className={styles.footerLink}href="mailto: art4dahlak@gmail.com">art4dahlak@gmail.com</a>
			</p>
		</footer>
	);
}

export default MemorialFooter;

