using FileForm.Api.Dto;
using FileForm.Api.Helpers;
using FileForm.Core;
using Microsoft.AspNetCore.Mvc;

namespace FileForm.Api.Controllers;

[ApiController]
public class FormController : ControllerBase
{
    private readonly IFileSaveService _fileSaveService;
    private readonly FormMapper _formMapper;

    public FormController(IFileSaveService fileSaveService, FormMapper formMapper)
    {
        _fileSaveService = fileSaveService;
        _formMapper = formMapper;
    }

    [HttpPost]
    [Route("docx")]
    public async Task<IActionResult> UploadFileRecord([FromForm]DocxFileFormDto form)
    {
        var fileRecord = _formMapper.MapWordFormToFileRecord(form);
        await _fileSaveService.SaveFileRecordAsync(fileRecord);   
        return Ok("File uploaded!");
    }
}