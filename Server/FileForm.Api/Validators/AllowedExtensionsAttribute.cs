using System.ComponentModel.DataAnnotations;

namespace FileForm.Api.Validators;

public class AllowedExtensionsAttribute : ValidationAttribute
{
    private readonly string[] _extensions;

    public AllowedExtensionsAttribute(string[] extensions)
    {
        _extensions = extensions;
    }

    protected override ValidationResult IsValid(object value, ValidationContext validationContext)
    {
        var file = value as IFormFile;
        if (file == null) return new ValidationResult("File required.");
        
        var extension = Path.GetExtension(file.FileName);
        if (!_extensions.Contains(extension.ToLower()))
        {
            var errorMessage = ErrorMessage != null 
                ? string.Format(ErrorMessage, string.Join(", ", _extensions)) 
                : $"Only {string.Join(", ", _extensions)} files are allowed";
            return new ValidationResult(errorMessage);
        }

        return ValidationResult.Success;
    }
}