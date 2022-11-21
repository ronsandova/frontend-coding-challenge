import React, { useState } from "react";

function PasswordInput(props) {
	const [passwordValid, setPasswordValid] = useState({
		valid: true,
		errorMsg: "",
	});
	const passwordPattern = props?.passwordPattern;
	const required = props?.required;

	const onBlurHandler = (event) => {
		const inputValue = event.target.value;

		if (passwordPattern) {
			const passwordRegex = new RegExp(passwordPattern);
			setPasswordValid({
				valid: passwordRegex.test(inputValue),
				errorMsg:
					"Password must be 8 or more characters and a mixture of numbers and letters",
			});
		}

		if (required) {
			setPasswordValid({
				valid: inputValue > 0,
				errorMsg: "Password can not be blank",
			});
		}
	};

	return (
		<div>
			<input
				type="text"
				pattern={passwordPattern}
				required={required ? true : false}
				onBlur={onBlurHandler}
			/>
			{!passwordValid.valid ? <p>{passwordValid.errorMsg}</p> : null}
		</div>
	);
}

export default PasswordInput;
